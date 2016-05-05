<?php
class Produtos {
    public static function all() {
        $pdo = new PDO('mysql:host=localhost;port=3306;dbname=loja;charset=UTF8', 'root', '');
        $sql = 'SELECT * FROM produtos';
        $query = $pdo->query($sql);
        return $query->fetchAll();
    }
}
