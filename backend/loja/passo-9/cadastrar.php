<?php
require_once('dados/Clientes.php');

$post = false;
$nome = false;
$sexo = false;
$dataDeNascimento = false;
$endereco =  false;
$cep =  false;
$estado =  false;
$email = false;
$telefoneFixo = false;
$telefoneCelular =  false;
$usuario =  false;
$senha =  false;
$cadastro_ok = false;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $post = true;
    $nome = $_POST['nome'];
    $sexo = $_POST['sexo'];
    $dataDeNascimento = $_POST['data'];
    $endereco = $_POST['endereco'];
    $cep = $_POST['cep'];
    $estado = $_POST['estado'];
    $email = $_POST['email'];
    $telefoneFixo = $_POST['telefone_fixo'];
    $telefoneCelular = $_POST['telefone_celular'];
    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];

    $preferencias = null;
    if (isset($_POST['preferencias'])) {
        $preferencias = $_POST['preferencias'];
    }

    $cadastro_ok = false;

    try {
        $r = Clientes::add($nome, $sexo, $dataDeNascimento, $endereco, $cep,
        $estado, $email, $telefoneFixo, $telefoneCelular, $usuario, $senha,
        $preferencias);
        if ($r > 0) {
            $cadastro_ok = true;
        }
    } catch (Exception $ex) {

    }
}

include('header.php');
?>

<h1>Criar conta</h1>

<p>Preencha o formulário a seguir para criar uma conta de usuário e concluir seus pedidos.
    Os campos marcados com <span class="required">*</span> são de preenchimento obrigatório.</p>

<?php

if ($post && !$cadastro_ok) { ?>
    <div class="alert alert-danger alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>Aviso!</strong> O cadastro não foi realizado. Verifique os dados e tente novamente.
    </div>
<?php
}
?>

<form class="form" method="post">
    <fieldset>
        <legend>Dados pessoais</legend>

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="nome">Nome <span class="required">*</span></label>
                    <input type="text" name="nome" id="nome" class="form-control" placeholder="Informe seu nome completo" required value="<?=$nome?>">
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="sexo">Sexo</label>
                    <select class="form-control" name="sexo" id="sexo">
                        <option value="NA" <?= ($sexo == 'NA') ? 'checked' : '' ?>>Prefiro não informar</option>
                        <option value="F" <?= ($sexo == 'F') ? 'checked' : '' ?>>Feminino</option>
                        <option value="M" <?= ($sexo == 'M') ? 'checked' : '' ?>>Masculino</option>
                    </select>
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="data">Data de nascimento <span class="required">*</span></label>
                    <input type="date" name="data" id="data" class="form-control" required value="<?=$data?>">
                </div>
            </div>
        </div>
    </fieldset>

    <fieldset>
        <legend>Informações para contato</legend>

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="endereco">Endereço completo</label>
                    <input type="text" class="form-control" name="endereco" id="endereco" value="<?=$endereco?>">
                </div>
            </div>

            <div class="col-md-3">
                <div class="form-group">
                    <label for="cep">CEP</label>
                    <input type="text" class="form-control" name="cep" id="cep" value="<?=$cep?>">
                </div>
            </div>

            <div class="col-md-3">
                <div class="form-group">
                    <label for="estado">Estado</label>
                    <select class="form-control" name="estado" id="estado">
                        <option value="">Selecione</option>
                    	<option value="AC" <?= ($estado == 'AC') ? 'checked' : '' ?>>Acre</option>
                    	<option value="AL" <?= ($estado == 'AL') ? 'checked' : '' ?>>Alagoas</option>
                    	<option value="AP" <?= ($estado == 'AP') ? 'checked' : '' ?>>Amapá</option>
                    	<option value="AM" <?= ($estado == 'AM') ? 'checked' : '' ?>>Amazonas</option>
                    	<option value="BA" <?= ($estado == 'BA') ? 'checked' : '' ?>>Bahia</option>
                    	<option value="CE" <?= ($estado == 'CE') ? 'checked' : '' ?>>Ceará</option>
                    	<option value="DF" <?= ($estado == 'DF') ? 'checked' : '' ?>>Distrito Federal</option>
                    	<option value="ES" <?= ($estado == 'ES') ? 'checked' : '' ?>>Espirito Santo</option>
                    	<option value="GO" <?= ($estado == 'GO') ? 'checked' : '' ?>>Goiás</option>
                    	<option value="MA" <?= ($estado == 'MA') ? 'checked' : '' ?>>Maranhão</option>
                    	<option value="MS" <?= ($estado == 'MS') ? 'checked' : '' ?>>Mato Grosso do Sul</option>
                    	<option value="MT" <?= ($estado == 'MT') ? 'checked' : '' ?>>Mato Grosso</option>
                    	<option value="MG" <?= ($estado == 'MG') ? 'checked' : '' ?>>Minas Gerais</option>
                    	<option value="PA" <?= ($estado == 'PA') ? 'checked' : '' ?>>Pará</option>
                    	<option value="PB" <?= ($estado == 'PB') ? 'checked' : '' ?>>Paraíba</option>
                    	<option value="PR" <?= ($estado == 'PR') ? 'checked' : '' ?>>Paraná</option>
                    	<option value="PE" <?= ($estado == 'PE') ? 'checked' : '' ?>>Pernambuco</option>
                    	<option value="PI" <?= ($estado == 'PI') ? 'checked' : '' ?>>Piauí</option>
                    	<option value="RJ" <?= ($estado == 'RJ') ? 'checked' : '' ?>>Rio de Janeiro</option>
                    	<option value="RN" <?= ($estado == 'RN') ? 'checked' : '' ?>>Rio Grande do Norte</option>
                    	<option value="RS" <?= ($estado == 'RS') ? 'checked' : '' ?>>Rio Grande do Sul</option>
                    	<option value="RO" <?= ($estado == 'RO') ? 'checked' : '' ?>>Rondônia</option>
                    	<option value="RR" <?= ($estado == 'RR') ? 'checked' : '' ?>>Roraima</option>
                    	<option value="SC" <?= ($estado == 'SC') ? 'checked' : '' ?>>Santa Catarina</option>
                    	<option value="SP" <?= ($estado == 'SP') ? 'checked' : '' ?>>São Paulo</option>
                    	<option value="SE" <?= ($estado == 'SE') ? 'checked' : '' ?>>Sergipe</option>
                    	<option value="TO" <?= ($estado == 'TO') ? 'checked' : '' ?>>Tocantins</option>
                    </select>
                </div>

            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="email">E-mail <span class="required">*</span></label>
                    <input type="email" class="form-control" name="email" id="email" required value="<?=$email?>">
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="telefone_fixo">Telefone fixo</label>
                    <input type="text" class="form-control" name="telefone_fixo" id="telefone_fixo" value="<?=$telefoneFixo?>">
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="telefone_celular">Telefone celular</label>
                    <input type="text" class="form-control" name="telefone_celular" id="telefone_celular" value="<?=$telefoneCelular?>">
                </div>
            </div>
        </div>
    </fieldset>

    <fieldset>
        <legend>Preferências</legend>
        <p>
            Marque as opções abaixo conforme as suas preferências de categorias de produtos.
        </p>
        <div class="form-group">
            <div class="checkbox">
                <label><input type="checkbox" name="preferencias[]" value="eletronicos"> Eletrônicos</label>

            </div>
            <div class="checkbox">
                <label><input type="checkbox" name="preferencias[]" value="informatica"> Informática</label>
            </div>
            <div class="checkbox">
                <label><input type="checkbox" name="preferencias[]" value="eletrodomesticos"> Eletrodomésticos</label>

            </div>
        </div>

    </fieldset>


    <fieldset>
        <legend>Para acessar a loja</legend>
        <p>
            Informe o nome de usuário e senha desejados para acessar a loja e poder fazer compras.
        </p>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="usuario">Nome de usuário <span class="required">*</span></label>
                    <input type="text" class="form-control" name="usuario" id="usuario" required value="<?=$usuario?>">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="senha">Senha <span class="required">*</span></label>
                    <input type="password" class="form-control" name="senha" id="senha" required>
                </div>
            </div>
        </div>

    </fieldset>

    <hr />

    <div class="pull-right">
        <button type="submit" class="btn btn-primary" name="button">Salvar</button>
    </div>
</form>

<?php
include('footer.php');
?>
