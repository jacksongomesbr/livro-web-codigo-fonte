import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {EventosService} from './eventos.service';

import './rxjs-operators';

@Component({
    templateUrl: './eventos-detalhes.component.html',
    providers: [EventosService]
})
export class EventosDetalhesComponent implements OnInit {
    evento:any;
    quantidadeDeInscritos:number;
    quantidadeDeInscricoesPagas:number;
    totalRecebido:number;
    porcentagemJaRecebida:number;
    inscritos:any[];
    errorMessage:string;

    constructor(
        private eventosService:EventosService,
        private route:ActivatedRoute,
        private router: Router) {
    }

    ngOnInit():void {
        this.quantidadeDeInscricoesPagas = 0;
        this.route.params.subscribe(
            params => {
                this.eventosService.evento(params['id']).subscribe(
                    evento => {
                        this.evento = evento;
                        this.eventosService.inscritos(evento.id).subscribe(
                            inscritos => {
                                this.inscritos = inscritos;
                                this.quantidadeDeInscritos = inscritos.length;
                                for(let inscrito of this.inscritos) {
                                    if (inscrito.dataDePagamento != null) {
                                        this.quantidadeDeInscricoesPagas++;
                                    }
                                }
                                this.totalRecebido = this.quantidadeDeInscricoesPagas * this.evento.precoDaInscricao;
                                let totalEstimado:number = this.evento.numeroEstimadoDeInscritos * this.evento.precoDaInscricao;
                                this.porcentagemJaRecebida = this.totalRecebido/totalEstimado * 100;
                            },
                            error => null
                        )
                    },
                    error => this.errorMessage = <any>error
                )
            }
        )
    }

    inscricoes(id: number) : void {
        this.router.navigate(['/', id, 'inscricoes']);
    }
    //
    // fechar() {
    //     this.router.navigate(['/eventos'])
    // }
    //
    // editar() {
    //     this.router.navigate(['/eventos', this.evento.id, 'editor']);
    // }

}