<?php
include('../header.php');
require_once('../dados/Clientes.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $usuario = $request->usuario;
    $senha = $request->senha;

    $cliente = Clientes::validate($usuario, $senha);

    if ($cliente) {
        echo json_encode($cliente);
    } else {
        header("Falha na autenticação", true, 403);
        die;
    }
}
?>
