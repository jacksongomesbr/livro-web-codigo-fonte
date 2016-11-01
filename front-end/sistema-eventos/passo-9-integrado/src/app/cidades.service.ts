/**
 * Created by Jackson on 26/10/2016.
 */

import {Injectable, Inject} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ServiceBase} from "./service-base.service";
import {CidadeModel} from "./cidade.model";
import {AuthService} from "./auth.service";

@Injectable()
export class CidadesService extends ServiceBase {
    constructor(http: Http, auth: AuthService) {
        super(http, auth);
    }

    all(): Observable<CidadeModel[]> {
        let options = super.getRequestOptions();

        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.apiUrl + '/cities', options)
            .map(super.extractData)
            .catch(super.handleError);
    }

}