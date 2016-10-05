/**
 * Created by Jackson on 03/10/2016.
 */

export class Funcionario {

    public matricula: number;
    public nome: string;
    public cpf: string;
    public email: string;
    public tempoDeServico: number;

    constructor(matricula: number, nome: string, cpf: string, email: string, tempoDeServico: number) {
        this.matricula = matricula;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.tempoDeServico = tempoDeServico;
    }

}