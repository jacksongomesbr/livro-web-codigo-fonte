/**
 * Created by Jackson on 26/10/2016.
 */

import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ServiceBase} from "../service-base.service";
import {AuthService} from "../auth.service";

@Injectable()
export class CriarContaService extends ServiceBase {
    constructor(http: Http, auth: AuthService) {
        super(http, auth);
    }

    save(nome: string, email: string, senha: string, sexo: string,
        dataDeNascimento: string, enderecoCEP: string, enderecoLogradouro: string,
        enderecoComplemento:string, enderecoIdCidade: number, imagem: string) : Observable<any> {

        let options = super.getRequestOptions();

        let conta: any = {
            'nome' : nome,
            'email' : email,
            'senha' : senha,
            'sexo': sexo,
            'dataDeNascimento': dataDeNascimento,
            'cepEndereco': enderecoCEP,
            'logradouroEndereco': enderecoLogradouro,
            'complementoEndereco': enderecoComplemento,
            'idCidade': enderecoIdCidade,
            'imagem': imagem
        };

        return this.http.post(this.apiUrl + '/account', JSON.stringify(conta), options)
            .map(super.extractData)
            .catch(super.handleError);
    }

}