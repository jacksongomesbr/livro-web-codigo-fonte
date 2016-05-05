<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <title>Loja Virtual</title>
    </head>
    <body>
        <?php
        $produtos = array(
            array(
                'id' => 1,
                'nome' => 'Monitor LED FULL HD'
            ),
            array(
                'id' => 2,
                'nome' => 'Pendrive USB 16GB'
            )
        );
        ?>
         <h1>Produtos</h1>
         <ul>
         <?php
         foreach($produtos as $produto) {
         ?>
            <li><?=$produto['nome']?></li>
         <?php
         }
          ?>
         </ul>
    </body>
</html>
