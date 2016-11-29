import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class EventosService {
    constructor(private http: Http) { }
    private apiUrl = 'http://localhost:3003';

    eventos() : Observable<any[]> {
        return this.http.get(this.apiUrl + '/eventos')
            .map(this.extractData)
            .catch(this.handleError);
    }

    evento(id: number) : Observable<any> {
        return this.http.get(this.apiUrl + '/eventos/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    inscritos(idEvento: number) : Observable<any> {
        return this.http.get(this.apiUrl + '/eventos/' + idEvento + '/inscritos?_expand=pessoa')
            .map(this.extractData)
            .catch(this.handleError);
    }

    confirmarPagamento(id: number) : Observable<any> {
        let dados = JSON.stringify({"dataDePagamento": "2016-11-28"});
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.patch(this.apiUrl + '/inscritos/' + id, dados, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    excluirInscricao(id: number) : Observable<boolean> {
        return this.http.delete(this.apiUrl + '/inscritos/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); 
        return Observable.throw(errMsg);
    }

}