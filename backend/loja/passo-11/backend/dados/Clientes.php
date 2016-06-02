<?php
require_once('Database.php');

class Clientes {
    public static function all() {
        $pdo = Database::connection();
        $sql = 'SELECT * FROM clientes';
        $query = $pdo->query($sql);
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function find($id) {
        $pdo = Database::connection();
        $sql = 'SELECT * FROM clientes WHERE id = ?';
        $query = $pdo->prepare($sql);
        $query->execute(array($id));
        $cliente = $query->fetch(PDO::FETCH_ASSOC);
        return $cliente;
    }

    public static function validate($usuario, $senha) {
        $pdo = Database::connection();
        $sql = 'SELECT * FROM clientes WHERE usuario = ? AND senha = ?';
        $query = $pdo->prepare($sql);
        $query->execute(array($usuario, $senha));
        $cliente = $query->fetch(PDO::FETCH_ASSOC);
        return $cliente;
    }

    public static function add($nome, $sexo, $dataDeNascimento, $endereco, $cep,
    $estado, $email, $telefoneFixo, $telefoneCelular, $usuario, $senha,
    $preferencias) {
        if ($preferencias) {
            if (is_array($preferencias)) {
                $preferencias = implode($preferencias, ',');
            }
        }
        $pdo = Database::connection();
        $sql = 'INSERT INTO clientes(nome, sexo, dataDeNascimento, endereco, cep,
            estado, email, telefoneFixo, telefoneCelular, preferencias,
            usuario, senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        $r = false;
        try {
            $query = $pdo->prepare($sql);
            $r = $query->execute(array($nome, $sexo, $dataDeNascimento, $endereco, $cep,
            $estado, $email, $telefoneFixo, $telefoneCelular, $preferencias, $usuario, $senha));
            if ($query->rowCount() > 0) {
                return $pdo->lastInsertId();
            }
        } catch (Exception $ex) {
            throw new Exception("Erro no cadastro do cliente", 1);
        }
    }

    public static function delete($id) {
        $pdo = Database::connection();
        $sql = 'DELETE FROM clientes WHERE id = ?';
        $query = $pdo->prepare($sql);
        $query->execute(array($id));
        return $query->rowCount() > 0;
    }
}
