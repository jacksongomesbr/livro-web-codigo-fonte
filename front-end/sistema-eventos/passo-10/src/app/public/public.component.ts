import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {LocalStorageService} from "../localstorage.service";
import {AppComponent} from "../app.component";

@Component({
    selector: 'my-app',
    templateUrl: './public.component.html',
    styleUrls: ['./public.component.css'],
    providers: []
})
export class PublicComponent {
    username:string;

    constructor(private router:Router) {
        this.username = AppComponent.auth.user();
    }
}