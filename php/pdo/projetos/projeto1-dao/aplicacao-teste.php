<?php
include_once ("classes/Connection.php");
include_once "classes/AlunoDAO.php";

try {
    var_dump(AlunoDAO::getAll());

}catch (Exception $e){
    echo "Conexão Falhou! ".$e->getMessage();
}




?>






