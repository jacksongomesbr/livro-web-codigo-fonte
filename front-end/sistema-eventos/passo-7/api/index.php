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

// eventos

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


// newsletter/assinantes

$app->get('/assinantes', function() use($app){
    $db = Database::open();
    $query = $db->executeQuery('SELECT * FROM newsletter');
    $assinantes = $query->fetchAll();
    return $app->json(array(
        'data' => $assinantes
    ));
});

$app->get('/assinantes/quantidade', function() use($app){
    $db = Database::open();
    $query = $db->executeQuery('SELECT count(*) as quantidade FROM newsletter');
    $assinantes = $query->fetch();
    return $app->json(array(
        'data' => $assinantes['quantidade']
    ));
});

$app->post('/assinantes', function(Request $request) use($app) {
    $assinante = json_decode($request->getContent());
    if (isset($assinante->nome) && isset($assinante->email)) {
        $db = Database::open();
        try {
            $r = $db->executeUpdate('INSERT INTO newsletter(nome, email) VALUES(?, ?)',
                array($assinante->nome, $assinante->email));
            if ($r > 0) {
                return $app->json(array(
                    'data' => $db->lastInsertId()
                ));
            } else {
                throw new Exception();
            }
        } catch (Exception $e) {
            return $app->abort(500);
        }
    } else {
        return $app->abort(500);
    }
});

$app->run();
