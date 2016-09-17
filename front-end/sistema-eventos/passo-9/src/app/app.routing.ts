/**
 * Created by Jackson on 06/09/2016.
 */

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosListComponent }      from './eventos-list.component';
import { EventosDetalhesComponent } from './eventos-detalhes.component';
import { EventosEditorComponent } from './eventos-editor.component';
import {SobreComponent} from "./sobre.component";

const appRoutes: Routes = [
    {
        path: 'eventos',
        component: EventosListComponent
    },
    {
        path: 'eventos/:id',
        component: EventosDetalhesComponent
    },
    {
        path: 'eventos/:id/editor',
        component: EventosEditorComponent
    },
    {
        path: 'sobre',
        component: SobreComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

