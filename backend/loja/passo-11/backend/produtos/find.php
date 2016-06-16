<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, HEAD, OPTIONS, POST, PUT");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

require_once('../dados/Produtos.php');

if (!isset($_GET['id'])) {
    echo '';
    exit();
}

$id = $_GET['id'];

$produto = Produtos::find($id);

echo json_encode($produto);

?>
