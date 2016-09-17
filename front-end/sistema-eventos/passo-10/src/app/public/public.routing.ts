/**
 * Created by Jackson on 06/09/2016.
 */

import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SobreComponent, PageNotFoundComponent, PublicComponent} from ".";
import {eventos_routes_public} from '../eventos';

const appRoutes:Routes = [
    {
        path: '',
        component: PublicComponent,
        children: [
            ...eventos_routes_public,
            {
                path: 'sobre',
                component: SobreComponent
            },
            {
                path: '',
                redirectTo: '/eventos',
                pathMatch: 'full'
            }
        ]
    }

];

export const routing:ModuleWithProviders = RouterModule.forChild(appRoutes);

