/**
 * Created by Jackson on 06/09/2016.
 */

import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EventosListComponent}      from './eventos-list.component';
import {EventosDetalhesComponent} from './eventos-detalhes.component';
import {EventosEditorComponent} from './eventos-editor.component';
import {EventosComponent} from "./eventos.component";

export const eventos_routes_public:Routes = [
    {
        path: 'eventos',
        component: EventosComponent,
        pathMatch: 'full'
    },
    {
        path: 'eventos/:id',
        component: EventosDetalhesComponent,
        pathMatch: 'full'
    }
];

export const eventos_routes_admin:Routes = [
    {
        path: 'eventos',
        component: EventosListComponent,
        pathMatch: 'full'
    },
    {
        path: 'eventos/:id',
        component: EventosEditorComponent,
        pathMatch: 'full'
    }
];

export const eventosRouting:ModuleWithProviders = RouterModule.forChild(eventos_routes_public);
export const eventosAdminRouting:ModuleWithProviders = RouterModule.forChild(eventos_routes_admin);


