<?php

require_once 'vendor/autoload.php';

use Silex\Application;
use Symfony\Component\HttpFoundation\Request;

$app = new Silex\Application();
$app['debug'] = true;

$app->get('/', function(Application $app, Request $request) {
    $numero1 = $request->query->get('numero1', 0);
    $numero2 = $request->query->get('numero2', 0);
    return ($numero1 + $numero2);
});

$app->run();
