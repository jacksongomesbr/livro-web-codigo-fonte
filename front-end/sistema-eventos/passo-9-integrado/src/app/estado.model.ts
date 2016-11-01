/**
 * Created by Jackson on 26/10/2016.
 */

import {CidadeModel} from "./cidade.model";

export class EstadoModel {
    Id: number;
    Nome: string;
    Cidades: CidadeModel[];
}