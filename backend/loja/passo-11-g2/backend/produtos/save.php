<?php
include('../header.php');
require_once('../dados/Produtos.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    try {
        $postdata = file_get_contents("php://input");
        $produto = json_decode($postdata);
        $id = Produtos::add($produto->nome, $produto->descricao, $produto->preco);

        if ($id) {
            echo json_encode($id);
        } else {
            header("Erro do servidor", true, 500);
            die;
        }
    } catch (Exception $e) {
        header("Erro do servidor", true, 500);
        die;
    }
}
?>
