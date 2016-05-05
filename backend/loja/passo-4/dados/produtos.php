<?php
class Produtos {
    public static function all() {
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
        return $produtos;
    }
}
