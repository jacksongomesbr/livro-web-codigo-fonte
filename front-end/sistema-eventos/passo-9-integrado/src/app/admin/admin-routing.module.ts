/**
 * Created by Jackson on 25/10/2016.
 */

import {NgModule}     from '@angular/core';
import {CommonModule}   from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HomeComponent} from "./home.component";
import {eventosAdminRouting} from "../eventos/eventos.routing";
import {AdminComponent} from "./admin.component";
import {AuthGuard} from "../auth.guard";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'admin',
                component: AdminComponent,
                canActivate: [AuthGuard],
                children: [
                    ...eventosAdminRouting,
                    {
                        path: '',
                        component: HomeComponent
                    }
                ]
            }
        ])
    ],
    declarations: [
        AdminComponent,
        HomeComponent
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule {
}