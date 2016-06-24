<?php
include('../header.php');
require_once('../dados/Produtos.php');

try {
    $produtos = Produtos::popular();
    echo json_encode($produtos);
} catch (Exception $e) {
    header("Erro do servidor", true, 500);
    die;
}

?>
