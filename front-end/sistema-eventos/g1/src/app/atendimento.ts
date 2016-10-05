/**
 * Created by Jackson on 03/10/2016.
 */
import { Funcionario } from './funcionario';
import { Cliente } from './cliente';
export class Atendimento {
    constructor(public funcionario: Funcionario,
                public cliente: Cliente,
                public tipo: string
    ) {

    }
}