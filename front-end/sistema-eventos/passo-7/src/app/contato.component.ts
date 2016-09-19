/**
 * Created by Jackson on 17/09/2016.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'contato',
    templateUrl: 'contato.component.html'
})
export class ContatoComponent {
    exibir:boolean = false;
    mostrar(): void {
        this.exibir = true;
    }
}

