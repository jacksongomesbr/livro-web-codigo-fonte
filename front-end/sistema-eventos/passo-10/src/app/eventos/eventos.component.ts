import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormsModule}   from '@angular/forms';
import {EventosService} from './eventos.service';
import '../rxjs-operators';
import {Evento} from './evento';

@Component({
    templateUrl: './eventos.component.html',
    providers: [EventosService]
})
export class EventosComponent implements OnInit {
    filtro:string = "";
    eventos:Evento[];
    errorMessage:string;

    constructor(private eventosService:EventosService,
                private router:Router) {
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

    detalhar(evento:Evento) {
        this.router.navigate(['/eventos', evento.id]);
    }

    atualizar() {
        this.getEventos();
    }
}