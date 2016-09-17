import {NgModule}      from '@angular/core';
import {CommonModule}       from '@angular/common';
import {FormsModule}   from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AdminComponent, DashboardComponent, LoginComponent,
    ConfiguracoesComponent, AjudaComponent, routing,
    PerfilComponent} from "./index";
import {eventos_admin_declarations} from "../eventos";
import {AuthService} from "../auth.service";
import {LocalStorageService} from "../localstorage.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        ...eventos_admin_declarations,
        AdminComponent,
        DashboardComponent,
        LoginComponent,
        ConfiguracoesComponent,
        AjudaComponent,
        PerfilComponent
    ],
    providers: [AuthService, LocalStorageService]
})
export class AdminModule {
}