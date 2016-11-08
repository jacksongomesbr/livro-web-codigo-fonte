import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {EventosService} from './eventos.service';

import '../rxjs-operators';
import {Evento} from './evento';
import {EstadosService} from "../estados.service";
import {CidadesService} from "../cidades.service";
import {EnderecosService} from "../enderecos.service";

@Component({
    selector: 'eventos-detalhes',
    templateUrl: './eventos-detalhes.component.html',
    styleUrls: [],
    providers: [EventosService, EstadosService, CidadesService, EnderecosService]
})
export class EventosDetalhesComponent implements OnInit {
    evento:Evento;
    errorMessage:string;

    constructor(
        private eventosService:EventosService,
        private estados:EstadosService,
        private cidades:CidadesService,
        private enderecos:EnderecosService,
        private route:ActivatedRoute,
        private router: Router) {
    }

    ngOnInit():void {
        this.route.params.subscribe(
            params => {
                this.eventosService.get(params['id']).subscribe(
                    evento => {
                        this.evento = evento;
                        this.enderecos.get(evento.IdEndereco).subscribe(
                            (endereco) => {
                                this.evento.endereco = endereco;
                                this.cidades.get(endereco.IdCidade).subscribe(
                                    (cidade) => {
                                        this.evento.endereco.cidade = cidade;
                                        this.estados.get(cidade.idEstado).subscribe(
                                            (estado) => {
                                                this.evento.endereco.cidade.estado = estado;
                                            }
                                        );
                                    }
                                );
                            }
                        );
                    },
                    error => this.errorMessage = <any>error
                );
            }
        );
    }

    fechar() {
        this.router.navigate(['/eventos'])
    }

    editar() {
        this.router.navigate(['/eventos', this.evento.id, 'editor']);
    }

}