<?php

/**
 * Created by PhpStorm.
 * User: Jackson
 * Date: 10/03/2016
 * Time: 23:31
 */

use App\Logic\Manager;

class ManagerTest extends \PHPUnit_Framework_TestCase
{
    public function testRunOk() {
        $manager = new Manager();
        $r = $manager->run();
        assert($r == true);
    }

    public function testRunError() {
        $manager = new Manager();
        $r = $manager->run();
        assert($r == false);
    }
}
