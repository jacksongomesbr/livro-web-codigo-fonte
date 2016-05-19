<?php

if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

$logado = false;
$cliente= false;
if (isset($_SESSION['cliente'])) {
    $logado = true;
    $cliente = $_SESSION['cliente'];
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
        <link rel="stylesheet" href="estilo.css">
        <script src="vendor/components/jquery/jquery.min.js"></script>
        <script src="vendor/twbs/bootstrap/dist/js/bootstrap.min.js"></script>
        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>
        <!-- Static navbar -->
        <nav class="navbar navbar-default navbar-static-top">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="index.php">Loja Virtual</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                <li class="active"><a href="index.php">Início</a></li>
                <li><a href="produtos.php">Produtos</a></li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                <li><a href="carrinho.php">Carrinho</a></li>
                <?php
                if ($logado) {
                    ?>
                    <li><a href="meus-dados.php"><strong><?=$cliente['nome']?></strong></a></li>
                    <li><a href="sair.php">Sair</a></li>
                    <?php
                } else { ?>
                    <li><a href="entrar.php">Entrar</a></li>
                    <?php
                }
                 ?>

              </ul>
            </div><!--/.nav-collapse -->
          </div>
        </nav>

        <div class="page-container container">
