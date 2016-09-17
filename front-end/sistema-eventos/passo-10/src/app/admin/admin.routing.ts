/**
 * Created by Jackson on 06/09/2016.
 */

import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {eventos_routes_admin} from "../eventos";
import {ConfiguracoesComponent} from "./configuracoes.component";
import {AdminComponent} from "./admin.component";
import {LoginComponent} from "./login.component";
import {DashboardComponent} from "./dashboard.component";
import {AjudaComponent} from "./ajuda.component";
import {PerfilComponent} from "./perfil.component";

const admin_routes:Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            ...eventos_routes_admin,
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'configuracoes',
                component: ConfiguracoesComponent
            },
            {
                path: 'ajuda',
                component: AjudaComponent
            },
            {
                path: 'perfil',
                component: PerfilComponent
            },
            {
                path: '',
                component: DashboardComponent
            }
        ]
    }
];

export const routing:ModuleWithProviders = RouterModule.forChild(admin_routes);

