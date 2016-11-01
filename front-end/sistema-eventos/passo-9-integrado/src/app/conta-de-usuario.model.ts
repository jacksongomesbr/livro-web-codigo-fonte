import {EnderecoModel} from "./endereco.model";
/**
 * Created by Jackson on 26/10/2016.
 */

export class ContaDeUsuarioModel {
    id: number;
    nome: string;
    email: string;
    senha: string;
    sexo: string;
    dataDeNascimento: string;
    endereco: EnderecoModel;

}