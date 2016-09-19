/**
 * Created by Jackson on 17/09/2016.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'newsletter',
    templateUrl: 'newsletter.component.html'
})
export class NewsletterComponent {
    exibir:boolean = false;
    nome:string;
    email:string;

    assinar():void {
        this.exibir = true;
    }
}

