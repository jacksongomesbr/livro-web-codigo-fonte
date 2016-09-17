export class Evento {
    public id: number;
    public nome: string;
    public cidade: string;
    public estado: string;

    constructor(id: number, nome: string, cidade: string, estado: string = '') {
        this.id = id;
        this.nome = nome;
        this.cidade = cidade;
        this.estado = estado;
    }
}