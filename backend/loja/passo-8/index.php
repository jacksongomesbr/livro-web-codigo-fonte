<?php
include('header.php');
?>

<?php
require_once('dados/Produtos.php');

$produtos = Produtos::recent(3);
?>

<ul class="grid">
<?php
foreach($produtos as $produto) {
?>

    <li>
        <div class="panel panel-default">
            <div class="panel-body">
                    <img class="img-responsive" src="imagens/<?=$produto['id']?>.jpg">
                    <div class="caption text-center">
                        <h4><?=$produto['nome']?></h4>
                    </div>
            </div>
            <div class="panel-footer text-center">
                <a href="produto.php?id=<?=$produto['id']?>" class="btn btn-default" role="button">
                    <i class="glyphicon glyphicon-zoom-in"></i> Detalhes
                </a>
            </div>
        </div>
    </li>
<?php
}
?>
</ul>


<?php
include('footer.php');
?>
