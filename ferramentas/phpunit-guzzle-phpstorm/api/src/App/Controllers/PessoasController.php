<?php
/**
 * Created by PhpStorm.
 * User: Jackson
 * Date: 12/03/2016
 * Time: 00:39
 */

namespace App\Controllers;

use App\Repository\PessoasRepository;
use Silex\Application;
use Symfony\Component\HttpFoundation\Request;

class PessoasController
{
    public function all(Application $application, Request $request) {
        $db = new PessoasRepository();
        $pessoas = $db->all();
        return $application->json($pessoas);
    }
}