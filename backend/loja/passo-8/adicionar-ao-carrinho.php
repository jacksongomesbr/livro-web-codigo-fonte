<?php

require_once('dados/Produtos.php');
if (!isset($_GET['id'])) {
    header('Location: index.php');
}
$id = $_GET['id'];
$produto = Produtos::find($id);
if (!$produto) {
    header('Location: index.php');
}

session_start();
if (!isset($_SESSION['carrinho']) || !$_SESSION['carrinho']) {
    $_SESSION['carrinho'] = array();
}

$_SESSION['carrinho'][] = $produto;
header('Location: carrinho.php');

 ?>
