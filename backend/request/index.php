<?php

require_once 'vendor/autoload.php';

use Silex\Application;
use Symfony\Component\HttpFoundation\Request;

$app = new Silex\Application();
$app['debug'] = true;

$app->get('/', function(Application $app, Request $request) {
    //print_r($request->query->get('id'));
    return $app->json(array('resposta'=>'ok'));
});

$app->get('/home/{id}', function($id) use ($app) {
    return "<h1>$id</h1>";
});

$app->run();
