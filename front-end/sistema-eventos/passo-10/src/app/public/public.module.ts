import {NgModule}      from '@angular/core';
import {CommonModule}       from '@angular/common';
import {FormsModule}   from '@angular/forms';
import {HttpModule} from '@angular/http';
import {PublicComponent, SobreComponent, PageNotFoundComponent, routing}  from '.';
import {eventos_public_declarations} from "../eventos";
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
        ...eventos_public_declarations,
        PublicComponent,
        SobreComponent,
        PageNotFoundComponent
    ],
    providers: [AuthService, LocalStorageService]
})
export class PublicModule {
}