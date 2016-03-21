<?php
 session_start();

// criando um array
$arr = array("Nome"=>"Pedro", "Sobrenome"=>"Silva" );

// adicionando o array na SESSÃO
$_SESSION["dados"]=$arr;



$new_vetor = array ("Cpf"=>"777-777-777-77", "Rg"=>"2222222");

//$_SESSION["dados"]=$_SESSION["dados"] + $new_vetor;




foreach ($_SESSION as $key=>$value){


 // se o elemento do SESSÃO for um array, então concatena-se com o array $new_vetor

 if (is_array($value)){
  $_SESSION[$key] = $_SESSION[$key] + $new_vetor;
 }


 // impriindo os elementos de $_SESSION
  print_r($_SESSION);


 print("</br> </br> removendo RG...</br> ");

 // removendo o valor 2222222 de SESSION
 removeElementoSession(2222222);

 print_r($_SESSION);
}


function removeElementoSession ($valor){
 // percorrendo os elementos da SESSÃO
 foreach ($_SESSION as $key=>$value){
  // verifica se o elemento em questão é o procurado. Se sim, o elemento será removido.
  if ($_SESSION[$key]==$valor)
   unset($_SESSION[$key]);
  else
   // verifica se o elemento é um array. Se for, o passo seguinte é percorrê-lo em busca do elemento procurado ($valor)
   if (is_array($_SESSION[$key])){
    foreach ( $_SESSION[$key] as $k=>$v){
     if ($_SESSION[$key][$k] == $valor){
      // remove o elemento, caso ele seja encontrado.
      unset($_SESSION[$key][$k]);
      
     }
   }
  }
 }
}
?>
