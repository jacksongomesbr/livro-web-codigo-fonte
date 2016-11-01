import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { EventosService } from './eventos.service';

import '../rxjs-operators';
import { Evento } from './evento';

@Component({
    selector: 'eventos-editor',
    templateUrl: './eventos-editor.component.html',
    styleUrls: [],
    providers: [EventosService]
})
export class EventosEditorComponent implements OnInit {
    evento: Evento;
    errorMessage: string;
    error: boolean = false;
    salvo: boolean = false;

    constructor(
        private eventosService:EventosService,
        private route:ActivatedRoute,
        private router: Router) {
    }

    ngOnInit():void {
        this.route.params.subscribe(
            params => {
                if (params['id'] != 'novo') {
                    this.eventosService.get(params['id']).subscribe(
                        evento => this.evento = evento,
                        error => this.errorMessage = <any>error
                    )
                } else {
                    this.evento = new Evento(0, '', 'Palmas', 'Tocantins');
                }
            }
        )
    }

    estados = [
        'Minas Gerais',
        'São Paulo',
        'Rio Grande do Sul',
        'Tocantins',
        'Goiás'
    ];

    cidades = [
        { estado: "Tocantins", nome: 'Palmas' },
        { estado: "Goiás", nome: 'Goiânia' },
        { estado: "Tocantins", nome: 'Paraíso do Tocantins' },
        { estado: "São Paulo", nome: 'São Paulo' },
        { estado: "Rio Grande do Sul", nome: 'Porto Alegre' },
        { estado: "Minas Gerais", nome: 'Belo Horizonte' },
    ];

    getCidades(estado: string) {
        let e: any[] = [];
        this.cidades.forEach(cidade => {
            if (estado != '' && estado == cidade.estado) {
                e.push(cidade);
            }
        });
        return e;
    }

    salvar() {
        this.eventosService.save(this.evento)
            .subscribe(
            evento => {
                this.evento = evento;
                this.error = false;
                this.salvo = true;
            },
            error => {
                this.errorMessage = <any>error;
                this.error = true;
                this.salvo = false;
            });
    }

    fechar() {
        this.router.navigate(['/eventos'])
    }

}