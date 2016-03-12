
<html>
<head>
    <style type="text/css">
        .error{
            color: #FF0000;
        }
    </style>

<?php
    $nomeError=$cpfError=$emailError= $sexoError="";
    function validarCamposRequeridos(&$nomeError, &$cpfError, &$emailError, &$sexoError){
        if (empty($_POST["txtNome"])){
            $nomeError = "Nome é obrigatório!";
        }
        if (empty($_POST["txtCpf"]))
            $cpfError ="CPF é obrigatório!";
        if (empty($_POST["txtEmail"]))
            $emailError = "O e-mail é obrigatório1";
        if (empty($_POST["radioSexo"]))
            $sexoError = "O sexo é obrigatório1";
    }
    if ($_SERVER["REQUEST_METHOD"]=="POST"){
        validarCamposRequeridos($nomeError, $cpfError, $emailError,$sexoError);
    }
?>

</head>
<body>
    <h1> Validação de Formulário </h1>
    <form name="-frmPrincipal" method="post" action="">
        Nome: <input type="text" name="txtNome">  <span class="error"> * <?=$nomeError?> </span> </br>
        CPF:  <input tyé="text" name="txtCpf"> <span class="error"> * <?=$cpfError?> </span></br>
        E-mail: <input type="text" name="txtEmail">  <span class="error"> * <?=$emailError?> </span> </br>
        Site: <input type="text" name="txtSite"> </br>
        Observações:<textarea name="textAreaObservacoes" rows="7" cols="40"> </textarea>
        </br>
        Sexo:
        <input type="radio" name="radioSexo" value="Masculino"> Masculino
        <input type="radio" name="radioSexo" value="Feminino"> Feminino
        <span class="error"> * <?=$sexoError?> </span>
        </br></br>
        <input type="submit" name="btnEnviar" value="Enviar">
        <input type="reset" name="resetBtn" value="Limpar">
    </form>

</body>
</html>
