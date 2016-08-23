export class Usuario {
    id : number;
    nome : string;
    login : string;
    email : string;

    constructor(id: number, nome: string, login: string, email: string) {
        this.id = id;
        this.nome = nome;
        this.login = login;
        this.email = email;
    }
}