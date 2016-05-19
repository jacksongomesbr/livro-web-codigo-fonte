<?php
require_once('Database.php');

class Produtos {
    public static function recent($quantidade = 5) {
        $pdo = Database::connection();
        $sql = 'SELECT * FROM produtos ORDER BY id DESC LIMIT ' . $quantidade;
        $query = $pdo->query($sql);
        return $query->fetchAll();
    }

    public static function all() {
        $pdo = Database::connection();
        $sql = 'SELECT * FROM produtos';
        $query = $pdo->query($sql);
        return $query->fetchAll();
    }

    public static function find($id) {
        $pdo = Database::connection();
        $sql = 'SELECT * FROM produtos WHERE id = ?';
        $query = $pdo->prepare($sql);
        $query->execute(array($id));
        $produto = $query->fetch();
        return $produto;
    }

    public static function add($nome, $descricao, $preco) {
        $pdo = Database::connection();
        $sql = 'INSERT INTO produtos(nome, descricao, preco)
        VALUES(?, ?, ?)';
        $query = $pdo->prepare($sql);
        $query->execute(array($nome, $descricao, $preco));
        if ($query->rowCount() > 0) {
            return $pdo->lastInsertId();
        } else {
            return false;
        }
    }

    public static function delete($id) {
        $pdo = Database::connection();
        $sql = 'DELETE FROM produtos WHERE id = ?';
        $query = $pdo->prepare($sql);
        $query->execute(array($id));
        return $query->rowCount() > 0;
    }
}
