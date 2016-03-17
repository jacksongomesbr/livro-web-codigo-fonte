<?php
/**
 * Created by PhpStorm.
 * User: Jackson
 * Date: 12/03/2016
 * Time: 00:35
 */

namespace App;

use App\Controllers\PessoasController;
use Silex\Application;
use Silex\ControllerCollection;
use Silex\ServiceProviderInterface;
use Silex\ControllerProviderInterface;

class AppServiceProvider implements ServiceProviderInterface, ControllerProviderInterface
{

    /**
     * Registers services on the given app.
     *
     * This method should only be used to configure services and parameters.
     * It should not get services.
     */
    public function register(Application $app)
    {
        $app['pessoas.controller'] = $app->share(function(){ return new PessoasController(); });
    }

    /**
     * Bootstraps the application.
     *
     * This method is called after all services are registered
     * and should be used for "dynamic" configuration (whenever
     * a service must be requested).
     */
    public function boot(Application $app)
    {
        // TODO: Implement boot() method.
    }

    /**
     * Returns routes to connect to the given application.
     *
     * @param Application $app An Application instance
     *
     * @return ControllerCollection A ControllerCollection instance
     */
    public function connect(Application $app)
    {
        $controllers = $app['controllers_factory'];

        $controllers->get('/pessoas', 'pessoas.controller:all');

        return $controllers;
    }
}