/**
 * Created by Jackson on 25/10/2016.
 */

import {NgModule}       from '@angular/core';
import {CommonModule}   from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {LogonRoutingModule} from "./logon-routing.module";
import {AuthService} from "../auth.service";
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LogonRoutingModule
    ],
    providers: [
        AuthService
    ]
})
export class LogonModule {
}