/**
 * Created by Jackson on 25/10/2016.
 */

import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AuthService} from "../auth.service";

@Component({
    templateUrl: 'admin.component.html'
})
export class AdminComponent {
    constructor(private auth:AuthService, private router:Router) {

    }
    sair(): void {
        this.auth.logout();
        this.router.navigate(['/']);
    }
}