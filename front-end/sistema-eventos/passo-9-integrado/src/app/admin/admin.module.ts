/**
 * Created by Jackson on 25/10/2016.
 */

import {NgModule}       from '@angular/core';
import {CommonModule}   from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {EventosService} from "../eventos/eventos.service";
import {AdminRoutingModule} from "./admin-routing.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AdminRoutingModule
    ],
    providers: [
        EventosService
    ]
})
export class AdminModule {
}