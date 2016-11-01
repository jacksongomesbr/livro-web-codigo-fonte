import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Evento}         from './evento';
import {Observable}     from 'rxjs/Observable';
import {AuthService} from "../auth.service";
import 'rxjs/add/operator/map';

@Injectable()
export class EventosService {
    constructor(private http: Http, private auth: AuthService) {
    }

    private apiUrl = 'https://fabrica.ulbra-to.br/sistema-eventos/backend/api/index.php/events';

    getEventos(filtro: string): Observable<any[]> {
        let headers = new Headers({ 'token-authorization': this.auth.getToken() });
        let options = new RequestOptions({ headers: headers });

        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.apiUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    get(id: number): Observable<any> {
        let headers = new Headers({ 'token-authorization': this.auth.getToken() });
        let options = new RequestOptions({ headers: headers });
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.apiUrl + '/' + id, options)
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

    save(evento: Evento): Observable<Evento> {
        let body = JSON.stringify(evento);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        //noinspection TypeScriptUnresolvedFunction
        return this.http.post(this.apiUrl + evento.id, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    delete(evento: Evento): Observable<number> {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.delete(this.apiUrl + evento.id)
            .map(this.extractData)
            .catch(this.handleError);
    }
}