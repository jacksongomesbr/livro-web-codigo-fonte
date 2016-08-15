export class Evento {
    public id: number;
    public nome: string;
    public cidade: string;

    constructor(id: number, nome: string, cidade: string) {
        this.id = id;
        this.nome = nome;
        this.cidade = cidade;
    }
}