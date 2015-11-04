<?php
require_once 'vendor/autoload.php';

use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Lpweb\AngularPostRequestServiceProvider;

$app = new Silex\Application();
$app['debug'] = true;
$app->register(new AngularPostRequestServiceProvider());

$app->post('/', function(Application $app, Request $request) {
    $data = $request->request->get('data');
    $numero1 = $data['numero1'];
    $numero2 = $data['numero2'];
    return ($numero1 + $numero2);
});

$app->run();
