import {Component} from '@angular/core';
import {Funcionario} from './funcionario';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    filtro: string = "";
    funcionario: Funcionario = null;

    funcionarios: Funcionario[] = [
        new Funcionario(1, 'Jose', '12312312312', 'jose@gmail.com', 1),
        new Funcionario(2, 'Maria', '321321123', 'maria@gmail.com', 2),
        new Funcionario(3, 'Paulo', '123123152345', 'paulo@gmail.com', 3),
        new Funcionario(4, 'Joana', '234234324234', 'joana@gmail.com', 4),
    ];

    listar(f: string) {
        let l = this.funcionarios.filter(funcionario => {
            return funcionario.nome.indexOf(f) != -1 ||
                funcionario.email.indexOf(f) != -1;
        });
        return l;
    }

    detalhar(funcionario: Funcionario) {
        this.funcionario = funcionario;
    }

    ocultar() {
        this.funcionario = null;
    }

}