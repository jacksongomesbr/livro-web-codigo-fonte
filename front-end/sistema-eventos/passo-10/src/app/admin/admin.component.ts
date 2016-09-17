import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router, NavigationStart} from '@angular/router';
import {LocalStorageService} from "../localstorage.service";
import {AuthService} from "../auth.service";
import {AppComponent} from "../app.component";

@Component({
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css'],
    providers: []
})
export class AdminComponent implements OnInit {
    username:string;

    ngOnInit():void {
        if (!AppComponent.auth.isLogged()) {
            this.router.navigate(['/admin/login']);
        } else {
            this.username = AppComponent.auth.user();
        }
    }

    constructor(private router:Router) {
        console.log('AdminComponent::constructor()');
        AppComponent.auth.usuarioLogou$.subscribe(username => {
            this.username = username;
            console.log('(admincomponent) usuario entrou: ', this.username);
        });
        AppComponent.auth.usuarioSaiu$.subscribe(x => {
            console.log('(admincomponent) usuario saiu: ', this.username);
            this.router.navigate(['/']);
        });
    }

    sair():void {
        AppComponent.auth.logout();
    }

}