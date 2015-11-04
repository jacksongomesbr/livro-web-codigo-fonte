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
        'dbname' => 'cidades',
        'user' => 'sa',
        'password' => 'sa',
        'host' => 'localhost',
        'driver' => 'pdo_sqlsrv',
        'charset' => 'utf-8'
    );
    return \Doctrine\DBAL\DriverManager::getConnection($connectionParams, $config);
}

$db = database();

$app->get('/cidades', function() use ($app, $db) {
    $sql = "SELECT * FROM Cidades";
    $query = $db->executeQuery($sql);
    $cidades = $query->fetchAll();
    return $app->json($cidades);
});

// estados

$app->get('/estados', function() use ($app, $db) {
    $sql = "SELECT * FROM Estados ORDER BY nome";
    $query = $db->executeQuery($sql);
    $estados = $query->fetchAll();
    return $app->json($estados);
});

$app->post('/estados', function() use ($app, $db) {
    $sql = "INSERT INTO Estados(nome, uf) VALUES(?, ?)";
    $r = $db->executeUpdate($sql, array("Tocantins", "TO"));
    return $r;
});

$app->delete('/estados/{id}', function($id) use ($app, $db) {
    $sql = "DELETE FROM Estados WHERE id = ?";
    $r = $db->executeUpdate($sql, array($id));
    return $r;
});

$app->post('/estados/{id}', function() use ($app, $db) {
    $sql = "SELECT * FROM Estados ORDER BY nome";
    $query = $db->executeQuery($sql);
    $estados = $query->fetchAll();
    return print_r($estados, true);
});

$app->run();
