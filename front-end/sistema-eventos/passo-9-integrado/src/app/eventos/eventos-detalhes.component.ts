import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {EventosService} from './eventos.service';

import '../rxjs-operators';
import {Evento} from './evento';

@Component({
    selector: 'eventos-detalhes',
    templateUrl: './eventos-detalhes.component.html',
    styleUrls: [],
    providers: [EventosService]
})
export class EventosDetalhesComponent implements OnInit {
    evento:Evento;
    errorMessage:string;

    constructor(
        private eventosService:EventosService,
        private route:ActivatedRoute,
        private router: Router) {
    }

    ngOnInit():void {
        this.route.params.subscribe(
            params => {
                this.eventosService.get(params['id']).subscribe(
                    evento => this.evento = evento,
                    error => this.errorMessage = <any>error
                )
            }
        )
    }

    fechar() {
        this.router.navigate(['/eventos'])
    }

    editar() {
        this.router.navigate(['/eventos', this.evento.id, 'editor']);
    }

}