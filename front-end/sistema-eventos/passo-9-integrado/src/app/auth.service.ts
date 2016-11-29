/**
 * Created by Jackson on 24/10/2016.
 */

import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    public token: string;

    constructor(private http: Http) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    getToken() {
        if (!this.loggedIn()) {
            return null;
        } else {
            let user = JSON.parse(localStorage.getItem('currentUser'));
            return user.token;
        }
    }

    loggedIn() {
        if (localStorage.getItem('currentUser')) {
            return true;
        } else {
            return false;
        }
    }

    getCurrentUser() {
        if (!this.loggedIn())
            return null;
        let user = JSON.parse(localStorage.getItem('currentUser'));
        return user;
    }

    logon(username: string, password: string): Observable<boolean> {
        let body = JSON.stringify({"email": username, "password": password});
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        //noinspection TypeScriptUnresolvedFunction
        return this.http.post('https://fabrica.ulbra-to.br/sistema-eventos/backend/api/index.php/authentication', body, options)
            .map(function(response: Response) {
                let r = response.json();
                if (r && r.access_token) {
                    let token = r.access_token;
                    this.token = token;
                    localStorage.setItem('currentUser', JSON.stringify({
                        username: username,
                        id: r.id,
                        // TODO: checar como está retorno da API
                        AdminEvento: r.isAdminEvento,
                        AdmGeral: r.isAdmGeral,
                        token: token
                    }));
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError);

    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}