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

// cidades
// retorna a lista de cidades
$app->get('/cidades', function() use ($app, $db) {
    $sql = "SELECT Cidades.*, Estados.uf as ufEstado, Estados.nome as nomeEstado
    FROM Cidades
    INNER JOIN Estados on Estados.id = Cidades.idEstado
    ORDER BY nome";
    $query = $db->executeQuery($sql);
    $cidades = $query->fetchAll();
    return $app->json($cidades);
});

// retorna uma cidade, com base no id
$app->get('/cidades/{id}', function($id) use ($app, $db) {
    $sql = "SELECT Cidades.*, Estados.uf as ufEstado, Estados.nome as nomeEstado
    FROM Cidades
    INNER JOIN Estados on Estados.id = Cidades.idEstado
    WHERE Cidades.id = ?";
    $query = $db->executeQuery($sql, array($id));
    $cidades = $query->fetch();
    return $app->json($cidades);
});

// salva os dados de uma cidade. funciona como cadastro e edição.
$app->post('/cidades', function(Application $app, Request $request) use ($db) {
    $id = $request->request->get('id');
    $nome = $request->request->get('nome');
    $idEstado = $request->request->get('idEstado');
    $r = 0;
    if ($id) {
        $sql = "UPDATE Cidades SET nome = ?, idEstado = ? WHERE id = ?";
        $r = $db->executeUpdate($sql, array($nome, $idEstado, $id));
    } else {
        $sql = "INSERT INTO Cidades(nome, idEstado) VALUES(?, ?)";
        $db->executeUpdate($sql, array($nome, $idEstado));
        $r = $db->lastInsertId();
    }
    return $r;
});

// exclui uma cidade
$app->delete('/cidades/{id}', function($id) use ($app, $db) {
    $sql = "DELETE FROM Cidades WHERE id = ?";
    $r = $db->executeUpdate($sql, array($id));
    return $r;
});



// estados
// retorna a lista de estados
$app->get('/estados', function() use ($app, $db) {
    $sql = "SELECT * FROM Estados ORDER BY nome";
    $query = $db->executeQuery($sql);
    $estados = $query->fetchAll();
    return $app->json($estados);
});

// retorna um estado específico, com base no id (parâmetro de rota)
$app->get('/estados/{id}', function($id) use ($app, $db) {
    $sql = "SELECT * FROM Estados WHERE id = ? ORDER BY nome";
    $query = $db->executeQuery($sql, array($id));
    $estado = $query->fetch();
    return $app->json($estado);
});

// retorna as cidades de um estado específico (parâmetro de rota: id)
$app->get('/estados/{id}/cidades', function($id) use ($app, $db) {
    $sql = "SELECT * FROM Cidades WHERE idEstado = ? ORDER BY nome";
    $query = $db->executeQuery($sql, array($id));
    $cidades = $query->fetchAll();
    return $app->json($cidades);
});

// salvar dados de estado. funciona como cadastro e atualização/edição
// de dados
$app->post('/estados', function(Application $app, Request $request) use ($db) {
    $id = $request->request->get('id');
    $nome = $request->request->get('nome');
    $uf = $request->request->get('uf');
    $r = 0;
    if ($id) {
        $sql = "UPDATE Estados SET nome = ?, uf = ? WHERE id = ?";
        $r = $db->executeUpdate($sql, array($nome, $uf, $id));
    } else {
        $sql = "INSERT INTO Estados(nome, uf) VALUES(?, ?)";
        $db->executeUpdate($sql, array($nome, $uf));
        $r = $db->lastInsertId();
    }
    return $r;
});

// exclui um estado
$app->delete('/estados/{id}', function($id) use ($app, $db) {
    $sql = "DELETE FROM Estados WHERE id = ?";
    $r = $db->executeUpdate($sql, array($id));
    return $r;
});

$app->run();
