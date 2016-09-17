import {NgModule}      from '@angular/core';
import {CommonModule}       from '@angular/common';
import {FormsModule}   from '@angular/forms';
import {HttpModule} from '@angular/http';
import {EventosComponent}  from './eventos.component';
import {EventosListComponent} from './eventos-list.component';
import {EventosEditorComponent} from './eventos-editor.component';
import {EventosDetalhesComponent} from './eventos-detalhes.component';
import {EventosService} from "./eventos.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        EventosComponent,
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