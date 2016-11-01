/**
 * Created by Jackson on 25/10/2016.
 */

import {Routes, RouterModule} from '@angular/router';
import {EventosDetalhesComponent} from "./eventos-detalhes.component";
import {EventosListComponent} from "./eventos-list.component";
import {EventosAdminComponent} from "./eventos-admin.component";
import {EventosEditorComponent} from "./eventos-editor.component";

export const eventosPublicRouting = [
    {
        path: 'eventos',
        component: EventosListComponent
    },
    {
        path: 'eventos/:id',
        component: EventosDetalhesComponent
    }
];

export const eventosAdminRouting = [
    {
        path: 'eventos',
        component: EventosAdminComponent
    },
    {
        path: 'eventos/:id',
        component: EventosEditorComponent
    }
];