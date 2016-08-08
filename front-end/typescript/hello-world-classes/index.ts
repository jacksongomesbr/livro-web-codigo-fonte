/**
 * Created by Jackson on 18/07/2016.
 */
interface Pessoa {
    primeiroNome: string;
    ultimoNome: string;
}

class Aluno {
    nome: string;
    constructor(public primeiroNome:string, public ultimoNome:string) {
        this.nome = primeiroNome + " " + ultimoNome;
    }
}

function mensagem(pessoa: Pessoa) {
    return "Olá, " + pessoa.primeiroNome + " " + pessoa.ultimoNome + "! Seja bem-vindo(a)!";
}

var pessoa = new Aluno("José", "Silva");

console.log(mensagem(pessoa));
