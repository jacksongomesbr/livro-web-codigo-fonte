<?php
session_start();

$username = $_SESSION   ["user_name"];
$hora_login = $_SESSION["login_time"];

echo "Hora login:".$hora_login."</br>";
echo "Username: ".$username."</br>";
echo "</br> </br> <a href='frmLogin.php'> Página de Login </a>"
?>
