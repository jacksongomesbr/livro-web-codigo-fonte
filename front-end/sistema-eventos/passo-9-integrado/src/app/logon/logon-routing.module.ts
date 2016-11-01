/**
 * Created by Jackson on 25/10/2016.
 */

import {NgModule}     from '@angular/core';
import {CommonModule}   from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {RouterModule} from '@angular/router';
import {LogonComponent} from "./logon.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'logon',
                component: LogonComponent
            }
        ])
    ],
    declarations: [
        LogonComponent
    ],
    exports: [
        RouterModule
    ]
})
export class LogonRoutingModule {
}