import {EstadoModel} from "./estado.model";
/**
 * Created by Jackson on 26/10/2016.
 */

export class CidadeModel {
    Id: number;
    Nome: string;
    idEstado: number;
    estado: EstadoModel;
}