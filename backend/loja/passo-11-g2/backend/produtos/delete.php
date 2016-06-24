<?php
include('../header.php');
require_once('../dados/Produtos.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    if (!isset($_GET['id'])) {
        header("Id do produto não informado", true, 400);
        die;
    }

    $id = $_GET['id'];

    try {
        $produto = Produtos::find($id);
        if (!$produto) {
            header("Produto não encontrado", true, 404);
            die;
        }

        $r = Produtos::delete($id);
        if (!$r) {
            header("Não foi possível excluir o produto", true, 500);
            die;
        }

        echo json_encode($r);
    } catch (Exception $e) {
        header("Erro do servidor", true, 500);
        die;
    }
} else {
    header("Formato de requisição HTTP inválida", true, 400);
    die;
}

?>
