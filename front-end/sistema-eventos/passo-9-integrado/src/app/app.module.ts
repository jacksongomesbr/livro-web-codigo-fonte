import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {AppComponent}  from './app.component';
import {AuthGuard} from "./auth.guard";
import {AuthService} from "./auth.service";
import {AppRoutingModule} from "./app-routing.module";
import {PublicModule} from "./public/public.module";
import {LogonModule} from "./logon/logon.module";
import {AdminModule} from "./admin/admin.module";
import {ServiceBase} from "./service-base.service";
import {CidadesService} from "./cidades.service";
import {EstadosService} from "./estados.service";
import {FileUploaderComponent} from "./file-uploader.component";
import {EstadoModel} from "./estado.model";
import {CidadeModel} from "./cidade.model";
import {EnderecoModel} from "./endereco.model";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        PublicModule,
        AdminModule,
        LogonModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        AuthGuard,
        AuthService,
        ServiceBase,
        CidadesService,
        EstadosService,
        EstadoModel,
        CidadeModel,
        EnderecoModel
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}