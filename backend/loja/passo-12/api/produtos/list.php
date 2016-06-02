<?php
header("Access-Control-Allow-Origin: *");

require_once('../dados/Produtos.php');

$produtos = Produtos::all();

echo json_encode($produtos);

?>
