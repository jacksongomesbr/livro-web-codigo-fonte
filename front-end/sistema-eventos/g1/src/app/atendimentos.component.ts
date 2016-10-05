/**
 * Created by Jackson on 03/10/2016.
 */

import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {AtendimentosService} from './atendimentos.service';
import './rxjs-operators';
import {Funcionario} from './funcionario';

@Component({
    selector: 'atendimentos-estatisticas',
    templateUrl: './atendimentos.component.html',
    styleUrls: [],
    providers: [AtendimentosService]
})
export class AtendimentosComponent implements OnInit {
    @Input()
    funcionario: number;

    @Output()
    onFechar = new EventEmitter();

    estatistica: any = null;

    constructor(private atendimentosService: AtendimentosService) {
    }

    ngOnInit() {
        this.atendimentosService.estatisticas(this.funcionario).subscribe(
            estatistica => {
                this.estatistica = estatistica;
            },
            erro => {
                console.log(erro);
            }
        )
    }

    fechar() {
        this.funcionario = null;
        this.onFechar.emit();
    }
}