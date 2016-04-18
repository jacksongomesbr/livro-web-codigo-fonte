<?php
include_once "Connection.php";
include_once "Aluno.php";



class AlunoDAO
{
    public static function add($aluno){
        $conn = Connection::Open();
        $sql = "INSERT INTO `alunos`(`turma`, `nome`,`nota1`,
                  `nota2`, `situacao`,`media`, `frequencia`)
               VALUES ('$aluno->Turma', '$aluno->Nome',
                       $aluno->Nota1,$aluno->Nota2,  '$aluno->Situacao',
                       $aluno->Media, $aluno->Frequencia)";
        $conn->exec($sql);
       return $conn->lastInsertId();
    }
    public static function add2($aluno){
        $conn = Connection::Open();
        $sql = "INSERT INTO `alunos`(`turma`, `nome`,`nota1`,
                          `nota2`, `situacao`,`media`, `frequencia`)
                    VALUES (:turma, :nome, :nota1,
                          :nota2, :situacao, :media, :frequencia)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(":turma",$aluno->Turma);
        $stmt->bindParam(":nome",$aluno->Nome);
        $stmt->bindParam(":nota1",$aluno->Nota1);
        $stmt->bindParam(":nota2",$aluno->Nota2);
        $stmt->bindParam(":situacao",$aluno->Situacao);
        $stmt->bindParam(":media",$aluno->Media);
        $stmt->bindParam(":frequencia",$aluno->Frequencia);
        $stmt->execute();
    }

    public static function getById($idAluno){
        $conn = Connection::Open();
        $sql = "SELECT *FROM Alunos Where id=".$idAluno;
        $objPDOStatement = $conn->query($sql);
        return AlunoDAO::retorno($objPDOStatement)[0];
    }

    public static function getById2($idAluno){
        $conn = Connection::Open();
        $sql = "SELECT *FROM Alunos Where id= ?";
        $stmt= $conn->prepare($sql);
        $stmt->bindParam(1, $idAluno);
        $stmt->execute();
        // meapeando cada coluna para uma propriedade de uma classe
        // se imprimir $retorno com var_dump, pode-se verificar que as propriedades
        // são definidas com os mesmos nomes em que as colunas foram definidas
        // no banco de dados.
        $retorno = $stmt->fetchAll(PDO::FETCH_CLASS, "Aluno");
        return $retorno[0];

       // $result= $stmt->fetchAll();
       // return AlunoDAO::retorno($result)[0];
  }


    public static function getAll(){
        $conn = Connection::Open();
        $sql = "SELECT *FROM Alunos";
        $objPDO = $conn->query($sql);
        return AlunoDAO::retorno($objPDO);
    }

    public static function update ($aluno){
        $conn = Connection::Open();
        $sql = "UPDATE `alunos` SET `nome`='$aluno->Nome',`turma`='$aluno->Turma',
              `nota1`=$aluno->Nota1,`nota2`=$aluno->Nota2,`situacao`='$aluno->Situacao',
              `media`=$aluno->Media,`frequencia`=$aluno->Frequencia WHERE `id`=$aluno->Id";
        return $conn->exec($sql);
    }
    public static function delete($idAluno){
        $conn = Connection::Open();
        $sql = "DELETE FROM `alunos` WHERE id=".$idAluno;
        return $conn->exec($sql);
    }

    private  function retorno($objResult){
        $alunos = array();
        if ($objResult instanceof PDOStatement)
        {
            if ($objResult->rowCount()==0)
                return null;
            else{
                foreach ($objResult as $linha) {
                    $aluno = AlunoDAO::fillObject($linha);
                    array_push($alunos, $aluno);
                  }
             }
        }else
            if (is_array($objResult)){
                for ($i=0; $i< count($objResult); $i++){
                    $aluno = AlunoDAO::fillObject($objResult[0]);
                    array_push($alunos, $aluno);
                }
            }
        return $alunos;
    }

    private static function fillObject($obj){
        $aluno = new Aluno();
        $aluno->Id = $obj["id"];
        $aluno->Nome=$obj["nome"];
        $aluno->Turma=$obj["turma"];
        $aluno->Nota1=$obj["nota1"];
        $aluno->Nota2=$obj["nota2"];
        $aluno->Media=$obj["media"];
        $aluno->Frequencia=$obj["frequencia"];
        $aluno->Situacao=$obj["situacao"];
        return $aluno;
    }

}