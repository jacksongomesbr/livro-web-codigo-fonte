/**
 * Created by Jackson on 26/10/2016.
 */

import {Injectable, Inject} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ServiceBase} from "./service-base.service";
import {AuthService} from "./auth.service";
import {EstadoModel} from "./estado.model";

@Injectable()
export class EstadosService extends ServiceBase {
    constructor(http: Http, auth: AuthService) {
        super(http, auth);
    }

    all(): Observable<EstadoModel[]> {
        let options = super.getRequestOptions();

        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.apiUrl + '/states', options)
            .map(super.extractData)
            .catch(super.handleError);
    }

    get(id: number) : Observable<EstadoModel> {
        let options = super.getRequestOptions();
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.apiUrl + '/states/' + id, options)
            .map(super.extractData)
            .catch(super.handleError);
    }

}