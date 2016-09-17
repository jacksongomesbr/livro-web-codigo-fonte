import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import '../../public/css/styles.css';
import {AuthService} from "./auth.service";
import {LocalStorageService} from "./localstorage.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [AuthService, LocalStorageService]
})
export class AppComponent {
    username:string;
    static auth:AuthService;

    constructor(private router:Router, auth:AuthService) {
        AppComponent.auth = auth;
    }

}