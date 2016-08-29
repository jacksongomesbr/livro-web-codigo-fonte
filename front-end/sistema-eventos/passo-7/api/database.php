<?php

class Database {
	public static function open() {
		$config = new \Doctrine\DBAL\Configuration();
		$connectionParams = array(
            'dbname' => 'sistema_eventos',
            'user' => 'root',
            'password' => '',
            'host' => 'localhost',
            'driver' => 'pdo_mysql',
            'charset' => 'utf8'
		);
		return \Doctrine\DBAL\DriverManager::getConnection($connectionParams, $config);
	}
}
