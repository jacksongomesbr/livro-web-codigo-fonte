<?php
require_once 'vendor/autoload.php';
require_once 'database.php';

use Symfony\Component\HttpFoundation\Request;

date_default_timezone_set('America/Araguaina');
setlocale(LC_ALL, 'pt_BR.utf-8');

$app = new Silex\Application();
$app->register(new JDesrosiers\Silex\Provider\CorsServiceProvider(), array(
    "cors.allowOrigin" => "*",
    "cors.allowMethods" => "GET, HEAD, OPTIONS, POST, PUT, DELETE"
));
$app->after($app["cors"]);
$app['debug'] = true;

$app->get('/eventos/', function(Request $request) use($app) {
    $filtro = $request->get('q', null);
    $db = Database::open();
    if ($filtro) {
        $filtro = '%' . $filtro . '%';
        $query = $db->executeQuery('SELECT * FROM eventos WHERE nome like ? OR cidade like ? OR estado like ?', array($filtro, $filtro, $filtro));
    } else {
        $query = $db->executeQuery('SELECT * FROM eventos');
    }
    $eventos = $query->fetchAll();
	return $app->json(array(
	    'data' => $eventos
	));
});

$app->get('/eventos/{id}', function($id) use($app) {
    $db = Database::open();
    $query = $db->executeQuery('SELECT * FROM eventos WHERE id = ?', array($id));
    $evento = $query->fetch();
    if ($evento) {
        return $app->json(array(
            'data' => $evento
        ));
    } else {
        return $app->abort(404);
    }
});

$app->post('/eventos/{id}', function($id, Request $request) use($app) {
    $evento = json_decode($request->getContent());
    $db = Database::open();
    if ($evento->id == 0) {
        $r = $db->executeUpdate('INSERT INTO eventos(nome, estado, cidade) VALUES(?, ?, ?)', 
            array($evento->nome, $evento->estado, $evento->cidade)
        );
        $evento->id = $db->lastInsertId();
    } else {
        $r = $db->executeUpdate('UPDATE eventos SET nome = ?, estado = ?, cidade = ? WHERE id = ?', 
            array($evento->nome, $evento->estado, $evento->cidade, $evento->id)
        );
    }
    return $app->json(array(
        'data' => $evento
    ));
});

$app->delete('/eventos/{id}', function($id) use($app) {
    $db = Database::open();
    $r = $db->executeUpdate('DELETE FROM eventos WHERE id = ?', array($id));
    return $app->json(array(
        'data' => $r
    ));
});

$app->run();
