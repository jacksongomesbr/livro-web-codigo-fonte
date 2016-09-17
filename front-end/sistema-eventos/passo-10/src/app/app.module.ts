import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './app.component';
//import {EventosModule} from './eventos/eventos.module';
import {routing} from './app.routing';
import {AdminModule} from "./admin/admin.module";
import {PublicModule} from "./public/public.module";

@NgModule({
    imports: [
        BrowserModule,
        PublicModule,
        //EventosModule,
        AdminModule,
        routing
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}