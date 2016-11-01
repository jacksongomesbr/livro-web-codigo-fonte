/**
 * Created by Jackson on 25/10/2016.
 */

import {NgModule}       from '@angular/core';
import {CommonModule}   from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SobreComponent} from "./sobre.component";
import {HomeComponent} from "./home.component";
import {PublicComponent} from "./public.component";
import {eventosPublicRouting} from "../eventos/eventos.routing";
import {CriarContaComponent} from "./criar-conta.component";
import {FileUploaderComponent} from "../file-uploader.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: PublicComponent,
                children: [
                    ...eventosPublicRouting,
                    {
                        path: 'criar-conta',
                        component: CriarContaComponent
                    },
                    {
                        path: 'sobre',
                        component: SobreComponent
                    },
                    {
                        path: '',
                        component: HomeComponent
                    }
                ]
            }
        ])
    ],
    declarations: [
        PublicComponent,
        SobreComponent,
        HomeComponent,
        CriarContaComponent,
        FileUploaderComponent
    ],
    exports: [
        RouterModule,
        FileUploaderComponent
    ]
})
export class PublicRoutingModule {
}