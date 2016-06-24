<?php

class Database {
    public static function connection() {
        return new PDO('mysql:host=localhost;port=3306;dbname=loja-g2;charset=UTF8', 'root', '');
    }
}
