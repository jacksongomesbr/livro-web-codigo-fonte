<?php

/**
 * Created by PhpStorm.
 * User: Jackson
 * Date: 01/11/2016
 * Time: 19:52
 */
class ValidationException extends Exception
{
    function __construct($message)
    {
        $arr = array();

        parent::__construct($message, 0, null);
    }
}
class EnderecoValidations {
    public function validate($cep, $idCidade) {
        $erros = array();
        if (strlen($cep) != 8) {
            $erros['cep'] = 'O comprimento do CEP precisa ser de 8 caracteres';
        }
        if ($cep == null) {
            $msg = 'O CEP não pode ser nulo';
            if (isset($erros['cep'])) {
                $t = $erros['cep'];
                $erros['cep'] = array($t, $msg);
            } else {
                $erros['cep'] = $msg;
            }

        }
        if ($idCidade == null) {
            $erros['idCidade'] = 'O identificador da cidade não pode ser nulo';
        }
        return erros;
    }
}
