<?php

class Aluno
{
    public $Id;
    public $Nome;
    public $Turma;
    public $Nota1;
    public $Nota2;
    public $Media;
    public $Frequencia;
    public $Situacao;

    // faça também o construtor

    /**
     * Aluno constructor.
     * @param $Id
     * @param $Nome
     * @param $Turma
     * @param $Nota1
     * @param $Nota2
     * @param $Media
     * @param $Frequencia
     * @param $Situacao
     */
    public function __construct($Id=null, $Nome=null, $Turma=null, $Nota1=null, $Nota2=null, $Media=null, $Frequencia=null, $Situacao=null)
    {
        $this->Id = $Id;
        $this->Nome = $Nome;
        $this->Turma = $Turma;
        $this->Nota1 = $Nota1;
        $this->Nota2 = $Nota2;
        $this->Media = $Media;
        $this->Frequencia = $Frequencia;
        $this->Situacao = $Situacao;
    }
}
