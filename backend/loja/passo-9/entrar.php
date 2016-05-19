<?php
require_once('dados/Clientes.php');

session_start();

if (isset($_SESSION['cliente'])) {
    header('Location: index.php');
}

$post = false;
$usuario = false;
$login = false;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $post = true;
    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];

    $cliente = Clientes::validate($usuario, $senha);

    if ($cliente) {
        $_SESSION['cliente'] = $cliente;
        header('Location: index.php');
    }
}

include('header.php');
?>

<h1>Entrar</h1>

<div class="row">
    <div class="col-md-6">
        <h3>Já sou cadastrado</h3>
        <p>
            Se você já está cadastrado, informe suas credenciais a seguir.
        </p>
        <form class="form" method="post">
            <?php

            if ($post && !$login) { ?>
                <div class="alert alert-danger alert-dismissible" role="alert">
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <strong>Aviso!</strong> Usuário ou senha incorretos. Corrija os dados e tente novamente.
                </div>
            <?php
            }
            ?>

            <div class="form-group">
                <label for="">Usuário</label>
                <input type="text" class="form-control" name="usuario" value="<?=$usuario?>" required>
            </div>
            <div class="form-group">
                <label for="">Senha</label>
                <input type="password" class="form-control"  name="senha" required>
            </div>
            <hr>
            <div class="pull-right">
                <button type="submit" class="btn btn-primary" name="button">Entrar</button>
            </div>
        </form>
    </div>
    <div class="col-md-6">
        <h3>Não estou cadastrado</h3>
        <p>
            Se você não está cadastrado, por favor, <a href="cadastrar.php">cadastre-se</a>
            para utilizar as funcionalidades da loja de forma mais completa.
        </p>
    </div>
</div>

<?php
include('footer.php');
?>
