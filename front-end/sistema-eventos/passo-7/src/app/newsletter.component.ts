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
        this.exibir = true;
    }
}

