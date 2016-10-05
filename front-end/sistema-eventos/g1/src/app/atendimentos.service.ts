/**
 * Created by Jackson on 03/10/2016.
 */

import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class AtendimentosService {

    private apiUrl = 'http://localhost/livro-web-codigo-fonte/front-end/sistema-eventos/g1/api/';


    constructor(private http: Http) {
    }

    public estatisticas(id: number): Observable<any> {
        return this.http.get(this.apiUrl + 'atendimentos/' + id)
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