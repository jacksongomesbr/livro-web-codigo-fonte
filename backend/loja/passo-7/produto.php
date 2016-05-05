<?php
require_once('dados/Produtos.php');
if (!isset($_GET['id'])) {
    header('Location: index.php');
}
$id = $_GET['id'];
$produto = Produtos::find($id);
if (!$produto) {
    header('Location: index.php');
}
?>

<?php
include('header.php');
?>

<article class="produto">
    <h1><?=$produto['nome']?></h1>

    <div class="row">
        <div class="col-md-6">
            <img class="img-responsive" src="imagens/<?=$produto['id']?>.jpg">
        </div>
        <div class="col-md-6">
            <div>
                <p>Preço especial</p>
                <p class="preco">R$ <?= number_format($produto['preco'], 2, ',', '.') ?></p>
                <p>
                    <a href="adicionar-ao-carrinho.php?id=<?=$produto['id']?>">Adicionar ao carrinho</a>
                </p>
            </div>
        </div>
    </div>

    <div>
        <?= str_replace(array("\r\n", "\n", "\r"), '<br>', $produto['descricao']) ?>
    </div>
</article>

<?php
include('footer.php');
?>
