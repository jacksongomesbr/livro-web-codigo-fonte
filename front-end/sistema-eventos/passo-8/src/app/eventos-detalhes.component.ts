import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { EventosService } from './eventos.service';

import './rxjs-operators';
import { Evento } from './evento';

@Component({
    selector: 'eventos-detalhes',
    templateUrl: './eventos-detalhes.component.html',
    styleUrls: [],
    providers: [EventosService]
})
export class EventosDetalhesComponent {
    @Input()
    evento: Evento;

    @Output()
    onFechar = new EventEmitter();

    constructor(private eventosService: EventosService) { }

    fechar() {
        this.evento = null;
        this.onFechar.emit();
    }
}