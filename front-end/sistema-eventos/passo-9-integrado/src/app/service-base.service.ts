/**
 * Created by Jackson on 26/10/2016.
 */

import {Injectable, Inject} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AuthService} from "./auth.service";

@Injectable()
export class ServiceBase {
    protected apiUrl: string = 'https://fabrica.ulbra-to.br/sistema-eventos/backend/api/index.php';

    constructor(protected http: Http, protected auth: AuthService) {
    }

    protected extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    protected handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    protected getRequestOptions() : RequestOptions {
        let headers = new Headers({ 'token-authorization': this.auth.getToken() });
        let options = new RequestOptions({ headers: headers });
        return options;
    }
}