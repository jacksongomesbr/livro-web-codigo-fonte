/**
 * Created by Jackson on 06/09/2016.
 */

import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {EventosListComponent}      from './eventos-list.component';
import {EventosDetalhesComponent} from './eventos-detalhes.component';
import {SobreComponent} from "./sobre.component";
import {HomeComponent} from "./home.component";
import {InscricoesListComponent} from "./inscricoes-list.component";

const appRoutes: Routes = [
    // {
    //     path: 'eventos',
    //     component: EventosListComponent
    // },
    {
        path: ':id',
        component: EventosDetalhesComponent
    },
    {
        path: ':id/inscricoes',
        component: InscricoesListComponent
    },
    // {
    //     path: 'eventos/:id/editor',
    //     component: EventosEditorComponent
    // },
    // {
    //     path: 'sobre',
    //     component: SobreComponent
    // },
    {
        path: '',
        component: EventosListComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

