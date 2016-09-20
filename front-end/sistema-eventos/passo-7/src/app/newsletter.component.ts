/**
 * Created by Jackson on 17/09/2016.
 */
import {Component} from '@angular/core';
import {NewsletterService} from "./newsletter.service";

@Component({
    selector: 'newsletter',
    templateUrl: 'newsletter.component.html',
    providers: [NewsletterService]
})
export class NewsletterComponent {
    exibir:boolean = false;
    erro:boolean = false;
    nome:string;
    email:string;
    quantidade:number;

    constructor(private assinantes: NewsletterService) {
        this.assinantes.quantidade().subscribe(
            assinantes => {
                this.quantidade = assinantes;
            },
            error => {
                console.log(error);
            }
        );
    }

    assinar():void {
        this.assinantes.save(this.nome, this.email).subscribe(
            retorno => {
                this.exibir = true;
                this.quantidade++;
            },
            error => {
                this.erro = true;
                console.log(error);
            }
        );
    }
}

