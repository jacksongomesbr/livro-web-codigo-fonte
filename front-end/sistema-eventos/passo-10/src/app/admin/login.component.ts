/**
 * Created by Jackson on 12/09/2016.
 */
import {Component} from '@angular/core';
import {FormsModule}   from '@angular/forms';
import {Router} from "@angular/router";
import {LocalStorageService} from "../localstorage.service";
import {AuthService} from "../auth.service";
import {AppComponent} from "../app.component";

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [AuthService, LocalStorageService]
})
export class LoginComponent {
    username:string;
    password:string;

    constructor(private router:Router) {
        if (!AppComponent.auth.isLogged()) {
            this.router.navigate(['/admin/login']);
        }
    }

    verificarLogin():void {
        AppComponent.auth.login(this.username, this.password);
        this.router.navigate(['/admin/']);
        //window.location.reload();
    }
}