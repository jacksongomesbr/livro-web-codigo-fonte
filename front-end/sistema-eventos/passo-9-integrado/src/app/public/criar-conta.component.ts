/**
 * Created by Jackson on 26/10/2016.
 */

import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CidadeModel} from "../cidade.model";
import {CidadesService} from "../cidades.service";
import {EstadosService} from "../estados.service";
import {EstadoModel} from "../estado.model";
import {ContaDeUsuarioModel} from "../conta-de-usuario.model";
import {Http} from "@angular/http";
import {CriarContaService} from "./criar-conta.service";

@Component({
    templateUrl: './criar-conta.component.html',
    providers: [CidadesService, EstadosService]
})
export class CriarContaComponent implements OnInit {
    cidades: CidadeModel[];
    estados: EstadoModel[];

    conta: ContaDeUsuarioModel;

    nome: string;
    email: string;
    senha: string;
    estado: number;
    cidade: number;
    sexo: string = 'F';
    dataDeNascimento: string;
    logradouro:string;
    complemento:string;
    cep:string;
    error: boolean = false;
    errorMessage: string = '';

    constructor(private cidadesService: CidadesService,
                private estadosService: EstadosService,
                private criarContaService: CriarContaService,
                private http: Http,
                private router: Router) {
    }

    ngOnInit(): void {
        this.conta = new ContaDeUsuarioModel();
        this.estadosService.all().subscribe(
            (estados) => {
                this.estados = estados;
                this.cidadesService.all().subscribe(
                    (cidades) => {
                        this.cidades = cidades;
                    }
                );
            }
        );
    }

    getCidades(estado: number): CidadeModel[] {
        if (estado) {
            return this.cidades.filter(cidade => cidade.idEstado == estado);
        }
    }

    salvar() {
        this.criarContaService.save(this.nome, this.email, this.senha, this.sexo, this.dataDeNascimento,
        this.cep, this.logradouro, this.complemento, this.cidade, this.imagem).subscribe(
            (ok) => console.log('cadastro ok'),
            (error) => {
                this.error = true;
                this.errorMessage = error;
            }
        )
    }

    @ViewChild('foto') foto: ElementRef;
    imagem: String;

    upload(): void {
        let tamanhoMaximo: number = 2 * 1024 * 1024; // tamanho maximo permitido = 2 MB
        let tiposPermitidos: string[] = ['image/jpeg', 'image/jpg', 'image/png']; // formatos de imagem permitidos

        let fi = this.foto.nativeElement;
        if (fi.files && fi.files[0]) {
            let fileToUpload = fi.files[0];
            // console.log(fileToUpload);
            let f = new FormData();
            f.append("file", fileToUpload);
            this.http
                .post('http://fabrica.ulbra-to.br/sistema-eventos/backend/api/file-upload', f)
                .subscribe(
                    (response) => {
                        let file = response.json();
                        this.imagem = file.filename;
                    },
                    (error) => {
                        console.log('file upload error: ', error);
                    }
                );
        }
    }
}