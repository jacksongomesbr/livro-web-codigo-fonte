<html>
<head>
    <style type="text/css">
        .error{
            color: red;
        }

    </style>

    <?php
    $msgError="";

    if (isset($_GET["erroLogin"])){
        $msgError = "Login e/ou senha inválidos!";
    }


    ?>
</head>
<body>
    <div id="msg_error" class="error">
      <?=$msgError?>
    </div>
    <form name="frmLogin" method="POST" action="login.php">
        <input type="tex]" name="textLogin"> </br>
        <input type="password" name="textSenha" value=""> </br>
        <input type="submit" name="btnLogin" value="Login" >
    </form>

</body>
</html>
