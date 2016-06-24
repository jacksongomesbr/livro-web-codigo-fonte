<?php
require_once('Database.php');

class Produtos {
    public static function recent($quantidade = 5) {
        $pdo = Database::connection();
        $sql = 'SELECT * FROM produtos ORDER BY id DESC LIMIT ' . $quantidade;
        $query = $pdo->query($sql);
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function all() {
        $pdo = Database::connection();
        $sql = 'SELECT * FROM produtos';
        $query = $pdo->query($sql);
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function find($id) {
        $pdo = Database::connection();
        $sql = 'SELECT * FROM produtos WHERE id = ?';
        $query = $pdo->prepare($sql);
        $query->execute(array($id));
        $produto = $query->fetch(PDO::FETCH_ASSOC);
        return $produto;
    }

    public static function add($nome, $descricao, $preco) {
        $pdo = Database::connection();
        $sql = 'INSERT INTO produtos(nome, descricao, preco, imagem, quantidadeDeAcessos)
        VALUES(?, ?, ?, NULL, 0)';
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

    public static function ping($id) {
        $pdo = Database::connection();
        $sql = 'UPDATE produtos SET quantidadeDeAcessos = quantidadeDeAcessos + 1 WHERE id = ?';
        $query = $pdo->prepare($sql);
        $query->execute(array($id));
        return $query->rowCount() > 0;
    }

    public static function popular() {
        $pdo = Database::connection();
        $sql = 'SELECT * FROM produtos ORDER BY quantidadeDeAcessos DESC LIMIT 5';
        $query = $pdo->query($sql);
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }
}
