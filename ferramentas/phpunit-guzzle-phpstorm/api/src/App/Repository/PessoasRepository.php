<?php
/**
 * Created by PhpStorm.
 * User: Jackson
 * Date: 12/03/2016
 * Time: 00:31
 */

namespace App\Repository;


class PessoasRepository
{
    public function all() {
        return array(
            array(
                "id" => 1,
                "nome" => "José da Silva",
                "idade" => 21
            )
        );
    }
}