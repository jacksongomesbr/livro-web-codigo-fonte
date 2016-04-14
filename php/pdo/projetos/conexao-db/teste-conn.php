<?php
include_once ("classes/Connection.php");

try {
    $conn = Connection::Open();
    echo "Conexão realizada com sucesso!";

}catch (Exception $e){
    echo "Conexão Falhou! ".$e->getMessage();
}
?>
