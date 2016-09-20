/**
 * Created by Jackson on 19/09/2016.
 */

import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class NewsletterService {
    constructor(private http:Http) {
    }

    private apiUrl = 'http://localhost/livro-web-codigo-fonte/front-end/sistema-eventos/passo-7/api/assinantes';

    all() : Observable<any[]> {
        return this.http.get(this.apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    quantidade() : Observable<number> {
        return this.http.get(this.apiUrl + '/quantidade')
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}