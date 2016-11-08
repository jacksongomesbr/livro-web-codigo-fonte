/**
 * Created by Jackson on 26/10/2016.
 */

import {CidadeModel} from "./cidade.model";

export class EnderecoModel {
    id: number;
    cep: string;
    logradouro: string;
    cidade: CidadeModel;
    idCidade: number;
}