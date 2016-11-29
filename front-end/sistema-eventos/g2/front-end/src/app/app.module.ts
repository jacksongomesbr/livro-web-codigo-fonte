import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {AppComponent}  from './app.component';
import {EventosListComponent} from './eventos-list.component';
import {EventosDetalhesComponent} from './eventos-detalhes.component';
import {SobreComponent} from './sobre.component';
import {routing} from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        EventosListComponent,
        EventosDetalhesComponent,
        SobreComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}