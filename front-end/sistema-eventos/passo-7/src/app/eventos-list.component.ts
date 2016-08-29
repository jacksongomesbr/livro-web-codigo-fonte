import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { EventosService } from './eventos.service';

import './rxjs-operators';
import { Evento } from './evento';

@Component({
    selector: 'eventos-list',
    templateUrl: './eventos-list.component.html',
    styleUrls: [ './eventos-list.component.css' ],
    providers: [EventosService]
})
export class EventosListComponent implements OnInit {
    filtro: string = "";
    eventos: Evento[];
    errorMessage: string;

    @Output()
    onEditar = new EventEmitter<Evento>();

    @Output()
    onDetalhar = new EventEmitter<Evento>();

    constructor(private eventosService: EventosService) { }

    ngOnInit() { this.getEventos(); }

    getEventos() {
        this.eventosService.getEventos(this.filtro)
            .subscribe(
            eventos => this.eventos = eventos,
            error => this.errorMessage = <any>error);
    }

    atualizar() {
        this.getEventos();
    }

    editar(evento: Evento) {
        this.onEditar.emit(evento);
    }

    detalhar(evento: Evento) {
        this.onDetalhar.emit(evento);
    }

    excluir(evento: Evento) {
        if (confirm('Tem certeza que deseja excluir o evento ' + evento.nome + '?')) {
            this.eventosService.delete(evento)
                .subscribe(
                    r => {
                        if (r > 0) {
                            this.atualizar();
                        }
                    },
                    error => this.errorMessage = <any>error
                );
        }
    }
}