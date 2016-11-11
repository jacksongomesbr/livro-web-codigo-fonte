/**
 * Created by Jackson on 25/10/2016.
 */

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AuthService} from "../auth.service";

@Component({
    templateUrl: 'admin.component.html'
})
export class AdminComponent implements OnInit {
    user: any;

    ngOnInit(): void {
        this.user = this.auth.getCurrentUser();
    }

    constructor(private auth:AuthService, private router:Router) {

    }

    sair(): void {
        this.auth.logout();
        this.router.navigate(['/']);
    }
}