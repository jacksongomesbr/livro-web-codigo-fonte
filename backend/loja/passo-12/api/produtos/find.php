<?php
header("Access-Control-Allow-Origin: *");

require_once('../dados/Produtos.php');

if (!isset($_GET['id'])) {
    echo '';
    exit();
}

$id = $_GET['id'];

$produto = Produtos::find($id);

echo json_encode($produto);

?>
