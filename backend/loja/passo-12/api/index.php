<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, HEAD, OPTIONS, POST, PUT");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

require_once __DIR__.'/vendor/autoload.php';
require_once __DIR__.'/AngularPostRequestServiceProvider.php';
require_once __DIR__.'/dados/Produtos.php';
require_once __DIR__.'/dados/Clientes.php';

use Silex\Application;
use Symfony\Component\HttpFoundation\Request;

$app = new Application();
$app->register(new AngularPostRequestServiceProvider());

$app->get('/produtos', function() use ($app) {
    $produtos = Produtos::all();
    return $app->json($produtos);
});

$app->get('/produtos/{id}', function($id) use ($app) {
    $produto = Produtos::find($id);
    if ($produto) {
        return $app->json($produto);
    } else {
        return $app->abort(404);
    }
});

$app->post('/clientes/validate', function(Request $request) use ($app) {
    $usuario = $request->get('usuario');
    $senha = $request->get('senha');

    $cliente = Clientes::validate($usuario, $senha);

    if ($cliente) {
        return $app->json($cliente);
    } else {
        return $app->abort(401);
    }

});

$app->run();
