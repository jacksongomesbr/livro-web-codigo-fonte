/**
 * Created by Jackson on 28/11/2016.
 */

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {EventosService} from './eventos.service';
import './rxjs-operators';

@Component({
    templateUrl: './inscricoes-list.component.html',
    providers: [EventosService]
})
export class InscricoesListComponent implements OnInit {
    inscricoes:any[];
    evento:any;
    errorMessage:string;

    constructor(private eventosService:EventosService,
                private route:ActivatedRoute,
                private router:Router) {
    }

    ngOnInit() {
        this.getInscricoes();
    }

    getInscricoes() {
        this.route.params.subscribe(
            params => {
                let eventoId = params['id'];
                this.eventosService.inscritos(eventoId)
                    .subscribe(
                        inscricoes => this.inscricoes = inscricoes,
                        error => this.errorMessage = <any>error
                    );
                this.eventosService.evento(eventoId).subscribe(
                    evento => this.evento = evento,
                    erro => null
                )
            });
    }

    confirmarPagamento(id:number) : void {
        if (confirm("Tem certeza que deseja confirmar o pagamento?")) {
            this.eventosService.confirmarPagamento(id).subscribe(
                inscricao => this.getInscricoes(),
                erro => this.errorMessage = erro
            )
        }
    }

    excluirInscricao(id:number) : void {
        if (confirm("Tem certeza que deseja excluir a inscrição?")) {
            this.eventosService.excluirInscricao(id).subscribe(
                excluido => this.getInscricoes(),
                erro => this.errorMessage = erro
            )
        }
    }

    telaDoEvento(id:number): void {
        this.router.navigate(['/', id]);
    }

}
