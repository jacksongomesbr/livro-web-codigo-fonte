import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {EventosService} from './eventos.service';

import '../rxjs-operators';
import {Evento} from './evento';

@Component({
    templateUrl: './eventos-list.component.html',
    styleUrls: ['./eventos-list.component.css'],
    providers: [EventosService]
})
export class EventosListComponent implements OnInit {
    filtro: string = "";
    eventos: any[];
    errorMessage: string;


    @Output()
    onDetalhar = new EventEmitter<Evento>();

    constructor(private eventosService: EventosService,
                private router: Router) {
    }

    ngOnInit() {
        this.getEventos();
    }

    getEventos() {
        this.eventosService.getEventos(this.filtro)
            .subscribe(
                eventos => this.eventos = eventos,
                error => this.errorMessage = <any>error);
    }

    atualizar() {
        this.getEventos();
    }

    detalhar(evento: any) {
        this.router.navigate(['/eventos', evento.Id]);
    }

}