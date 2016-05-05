<?php

session_start();
if (!isset($_SESSION['carrinho']) || !$_SESSION['carrinho']) {
    $_SESSION['carrinho'] = array();
}

?>

<!DOCTYPE html>
<html lang="pt-br">
 <head>
     <meta charset="utf-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1">
     <title>Loja Virtual</title>

     <link rel="stylesheet" href="vendor/twbs/bootstrap/dist/css/bootstrap.min.css">
     <script src="vendor/components/jquery/jquery.min.js"></script>
     <script src="vendor/twbs/bootstrap/dist/js/bootstrap.min.js"></script>
     <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
     <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
     <!--[if lt IE 9]>
       <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
       <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
     <![endif]-->
 </head>
 <body class="container">
     <h1>Carrinho</h1>
     <ul>
     <?php
     foreach($_SESSION['carrinho'] as $produto) {
     ?>
        <li><a href="produto.php?id=<?=$produto['id']?>"><?=$produto['nome']?></a></li>
     <?php
     }
     ?>
     </ul>
 </body>
</html>
