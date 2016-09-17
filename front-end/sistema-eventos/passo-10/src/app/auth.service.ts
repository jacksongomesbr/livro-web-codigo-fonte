/**
 * Created by Jackson on 16/09/2016.
 */

import {Injectable} from '@angular/core';
import {LocalStorageService} from "./localstorage.service";
import {Subject}    from 'rxjs/Subject';

@Injectable()
export class AuthService {
    private usuarioLogouSource = new Subject<string>();
    private usuarioSaiuSource  = new Subject<string>();

    usuarioLogou$ = this.usuarioLogouSource.asObservable();
    usuarioSaiu$ = this.usuarioSaiuSource.asObservable();

    constructor(private storage:LocalStorageService) {

    }

    isLogged(): boolean {
        let username = this.storage.get('username');
        if (!username) {
            return false;
        } else {
            return true;
        }
    }

    login(username:string, password: string) : void {
        // TODO: fazer autenticação no banco de dados
        this.storage.set('username', username);
        this.usuarioLogouSource.next(username);
    }

    logout() : void {
        this.storage.remove('username');
        this.usuarioSaiuSource.next('user');
    }

    user() : string {
        return this.storage.get('username');
    }
}