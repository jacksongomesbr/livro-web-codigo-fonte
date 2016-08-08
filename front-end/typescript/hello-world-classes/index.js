var Aluno = (function () {
    function Aluno(primeiroNome, ultimoNome) {
        this.primeiroNome = primeiroNome;
        this.ultimoNome = ultimoNome;
        this.nome = primeiroNome + " " + ultimoNome;
    }
    return Aluno;
}());
function mensagem(pessoa) {
    return "Olá, " + pessoa.primeiroNome + " " + pessoa.ultimoNome + "! Seja bem-vindo(a)!";
}
var pessoa = new Aluno("José", "Silva");
console.log(mensagem(pessoa));
//# sourceMappingURL=index.js.map