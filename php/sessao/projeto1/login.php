<?php
if ($_POST["textLogin"]=="user" && $_POST["textSenha"]=="password" ){
    session_start();
    date_default_timezone_set("America/Sao_Paulo");
    $_SESSION["user_name"]= $_POST["textLogin"];
    $_SESSION["login_time"] = date("d-m-Y h:i:sa");
    header("Location: profile.php");
}else{
    header('Location: frmLogin.php?erroLogin=1');
}
?>
