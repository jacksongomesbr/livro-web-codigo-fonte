<?php

require_once 'vendor/autoload.php';

$app = new Silex\Application();

$app->get('/', function() {
    return '<h1>home</h1>';
});

$app->get('/home/{id}', function($id) use ($app) {
    return "<h1>$id</h1>";
});

$app->run();
