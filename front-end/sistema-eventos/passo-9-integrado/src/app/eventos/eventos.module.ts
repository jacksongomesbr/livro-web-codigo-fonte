/**
 * Created by Jackson on 25/10/2016.
 */

import {NgModule}       from '@angular/core';
import {CommonModule}   from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {EventosService} from "../eventos/eventos.service";
import {EventosAdminComponent} from "./eventos-admin.component";
import {EventosListComponent} from "./eventos-list.component";
import {EventosEditorComponent} from "./eventos-editor.component";
import {EventosDetalhesComponent} from "./eventos-detalhes.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        EventosAdminComponent,
        EventosListComponent,
        EventosEditorComponent,
        EventosDetalhesComponent
    ],
    providers: [
        EventosService
    ]
})
export class EventosModule {
}