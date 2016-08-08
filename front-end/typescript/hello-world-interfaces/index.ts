/**
 * Created by Jackson on 18/07/2016.
 */
interface Pessoa {
    primeiroNome: string;
    ultimoNome: string;
}

function mensagem(pessoa: Pessoa) {
    return "Olá, " + pessoa.primeiroNome + " " + pessoa.ultimoNome + "! Seja bem-vindo(a)!";
}

var pessoa:Pessoa = {
    primeiroNome: "José",
    ultimoNome: "Silva"
}

console.log(mensagem(pessoa));
