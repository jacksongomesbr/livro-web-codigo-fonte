/**
 * Created by Jackson on 08/09/2016.
 */

import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: './logon.component.html',
    styleUrls: ['logon.component.css'],
    providers: [AuthService]
})
export class LogonComponent implements OnInit {
    username: string;
    password: string;
    error: string = null;

    constructor(private auth: AuthService, private router: Router) {
    }

    ngOnInit(): void {
        if (this.auth.loggedIn()) {
            this.router.navigate(['/admin']);
        }
    }

    entrar() {
        this.auth.logon(this.username, this.password).subscribe(
            (retorno) => {
                if (retorno) {
                    this.router.navigate(['/admin']);
                } else {
                    this.error = 'Erro no login';
                }
            },
            (error) => this.error = error
        );
    }
}