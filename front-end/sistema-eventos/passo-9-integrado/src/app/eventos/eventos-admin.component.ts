import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {EventosService} from './eventos.service';

import '../rxjs-operators';
import {Evento} from './evento';

@Component({
    templateUrl: './eventos-admin.component.html',
    providers: [EventosService]
})
export class EventosAdminComponent implements OnInit {
    filtro: string = "";
    eventos: any[];
    errorMessage: string;

    @Output()
    onEditar = new EventEmitter<Evento>();

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

    editar(evento: any) {
        // /eventos/id/editor
        this.router.navigate(['/eventos', evento.Id, 'editor'])
    }

    detalhar(evento: any) {
        this.router.navigate(['/eventos', evento.Id]);
    }

    excluir(evento: any) {
        if (confirm('Tem certeza que deseja excluir o evento ' + evento.Nome + '?')) {
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

    cadastrar() {
        // /eventos/id/editor
        this.router.navigate(['/eventos', 'novo', 'editor']);
    }
}