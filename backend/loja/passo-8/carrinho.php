<?php

session_start();
if (!isset($_SESSION['carrinho']) || !$_SESSION['carrinho']) {
    $_SESSION['carrinho'] = array();
}

?>

<?php
include('header.php');
?>

<h1>Carrinho</h1>

<table class="table table-bordered table-stripped table-hover">
    <thead>
        <tr>
            <th>Produto</th>
            <th width="100">Preço</th>
            <th width="100">Ações</th>
        </tr>
    </thead>
    <tbody>
        <?php
        $total = 0.0;
        foreach($_SESSION['carrinho'] as $index => $produto) {
            $total += $produto['preco'];
        ?>
        <tr>
            <td><a href="produto.php?id=<?=$produto['id']?>"><?=$produto['nome']?></a></td>
            <td>R$ <?=number_format($produto['preco'], 2, ',', '.')?></td>
            <td><a href="remover-do-carrinho.php?id=<?=$index?>" class="btn btn-sm btn-danger"><i class="glyphicon glyphicon-remove"></a></td>
        </tr>
        <?php
        }
        ?>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="3">
                <strong>Valor total do carrinho: R$ <?= number_format($total, 2, ',', '.') ?></strong>
            </td>
        </tr>
    </tfoot>
</table>

<?php
include('footer.php');
?>
