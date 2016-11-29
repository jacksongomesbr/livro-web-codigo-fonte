import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {EventosService} from './eventos.service';
import './rxjs-operators';

@Component({
    templateUrl: './eventos-list.component.html',
    providers: [EventosService]
})
export class EventosListComponent implements OnInit {
    eventos:any[];
    errorMessage:string;

    constructor(private eventosService:EventosService,
                private router:Router) {
    }

    ngOnInit() {
        this.getEventos();
    }

    getEventos() {
        this.eventosService.eventos()
            .subscribe(
                eventos => this.eventos = eventos,
                error => this.errorMessage = <any>error
            );
    }

    gerenciar(id:number) {
        this.router.navigate(['/', id]);
    }
}