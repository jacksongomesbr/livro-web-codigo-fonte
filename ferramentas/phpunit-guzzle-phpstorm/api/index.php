<?php
/**
 * Created by PhpStorm.
 * User: Jackson
 * Date: 12/03/2016
 * Time: 00:33
 */

require_once 'vendor/autoload.php';

use Silex\Application;
use App\AppServiceProvider;

$app = new Application();
$app['debug'] = true;
$app->register(new Silex\Provider\ServiceControllerServiceProvider());

$provider = new AppServiceProvider();
$app->register($provider);
$app->mount('/', $provider);

$app->get('/', function() use ($app){
    return $app->json(array(
        'name' => 'PGS',
        'description' => 'Testes de unidade com PHPUnit, Guzzle e Silex',
        'version' => '0.0.1'
    ));
});

$app->run();