<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <title>Loja Virtual</title>
    </head>
    <body>
        <?php
        function produtos($id = null) {
            
            $lista = array(
                array(
                    'id' => 1,
                    'nome' => 'Monitor LED FULL HD'
                ),
                array(
                    'id' => 2,
                    'nome' => 'Pendrive USB 16GB'
                )
            );
            
            if (!$id) {
                return $lista;
            }
            
            for($i = 0; $i < count($lista); $i++) {
                $produto = $lista[$i];
                if ($produto['id'] == $id) {
                    return $produto;
                }
            }
            
            return null;
        }
        
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
        
        <h3>Buscando pelo produto de id = 22</h3>
        <?php
        $produto = produtos(22);
        if (!$produto) {
        ?>
            <p>Nenhum produto encontrado</p>
        <?php
        } else {
        ?>
            <p><?=$produto['nome']?></p>
        <?php
        }
        ?>
    </body>
</html>
