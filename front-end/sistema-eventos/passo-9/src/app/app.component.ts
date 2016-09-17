import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Evento} from './evento';
import '../../public/css/styles.css';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    mes:string = 'Agosto';

    constructor(private router:Router) {
    }


}