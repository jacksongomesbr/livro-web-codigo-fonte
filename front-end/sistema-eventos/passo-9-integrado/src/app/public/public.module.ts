/**
 * Created by Jackson on 25/10/2016.
 */

import {NgModule}       from '@angular/core';
import {CommonModule}   from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {EventosService} from "../eventos/eventos.service";
import {PublicRoutingModule} from "./public-routing.module";
import {EventosModule} from "../eventos/eventos.module";
import {FileUploaderComponent} from "../file-uploader.component";
import {CriarContaService} from "./criar-conta.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PublicRoutingModule,
        EventosModule
    ],
    providers: [
        EventosService,
        CriarContaService
    ]
})
export class PublicModule {
}