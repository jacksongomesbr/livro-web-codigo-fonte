<?php
require_once 'vendor/autoload.php';

use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Lpweb\AngularPostRequestServiceProvider;

date_default_timezone_set('America/Araguaina');
setlocale(LC_ALL, 'pt_BR.utf-8');

$app = new Silex\Application();
$app['debug'] = true;
$app->register(new AngularPostRequestServiceProvider());

function database()
{
    $config = new \Doctrine\DBAL\Configuration();
    $connectionParams = array(
        'dbname' => 'acessos-analytics',
        'user' => 'sa',
        'password' => 'sa',
        'host' => 'localhost',
        'driver' => 'pdo_sqlsrv',
        'charset' => 'utf-8'
    );
    return \Doctrine\DBAL\DriverManager::getConnection($connectionParams, $config);
}

$db = database();

$app->post('/acessos', function(Application $app, Request $request) use ($db) {
    $nome = $request->request->get('nome');
    $url = $request->request->get('url');
    $data = $request->request->get('data');

    $sql = "INSERT INTO acessos(nome, url, data) VALUES(?, ?, ?)";
    $db->executeUpdate($sql, array($nome, $url, $data));
    $r = $db->lastInsertId();

    return $r;
});

$app->get('/acessos/estatisticas/{nome}', function($nome) use ($app, $db) {
    $sql = "select count(*) as quantidade from acessos where nome = ?";
    $query = $db->executeQuery($sql, array($nome));
    $consulta = $query->fetch();
    return $app->json($consulta);
});

$app->post('/acessos/estatisticas/url', function(Application $app, Request $request) use ($db) {
    $url = $request->request->get('url');
    $sql = "select count(*) as quantidade from acessos where url = ?";
    $query = $db->executeQuery($sql, array($url));
    $consulta = $query->fetch();
    return $app->json($consulta);
});

$app->post('/acessos/estatisticas/tempo', function(Application $app, Request $request) use ($db) {
    $data1 = $request->request->get('data1');
    $data2 = $request->request->get('data2');
    $sql = "select count(*) as quantidade from acessos where data between ? and ?";
    
    $query = $db->executeQuery($sql, array($data1, $data2));
    $consulta = $query->fetch();
    return $app->json($consulta);
});

$app->run();
