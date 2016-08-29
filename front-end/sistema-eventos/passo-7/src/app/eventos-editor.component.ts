import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { EventosService } from './eventos.service';

import './rxjs-operators';
import { Evento } from './evento';

@Component({
    selector: 'eventos-editor',
    templateUrl: './eventos-editor.component.html',
    styleUrls: [],
    providers: [EventosService]
})
export class EventosEditorComponent {
    @Input()
    evento: Evento;

    @Output()
    onFechar = new EventEmitter();

    @Output()
    onSalvar = new EventEmitter<Evento>();

    errorMessage: string;
    error: boolean = false;
    salvo: boolean = false;

    constructor(private eventosService: EventosService) { }

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
                this.onSalvar.emit(this.evento);
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
        this.evento = null;
        this.onFechar.emit();
    }
}