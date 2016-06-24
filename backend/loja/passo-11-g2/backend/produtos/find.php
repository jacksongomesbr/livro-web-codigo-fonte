<?php
include('../header.php');
require_once('../dados/Produtos.php');

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

    echo json_encode($produto);
} catch (Exception $e) {
    header("Erro do servidor", true, 500);
    die;
}

?>
