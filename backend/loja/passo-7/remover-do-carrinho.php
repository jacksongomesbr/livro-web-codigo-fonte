<?php

if (!isset($_GET['id'])) {
    header('Location: index.php');
}
$id = $_GET['id'];

session_start();
if (!isset($_SESSION['carrinho']) || !$_SESSION['carrinho']) {
    $_SESSION['carrinho'] = array();
}

array_splice($_SESSION['carrinho'], $id, 1);

header('Location: carrinho.php');
?>
