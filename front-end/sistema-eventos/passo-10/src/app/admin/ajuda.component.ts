/**
 * Created by Jackson on 15/09/2016.
 */
import {Component} from '@angular/core';

@Component({
    template: `<h1>Ajuda</h1>
<p>Esta página apresenta dicas e instruções sobre como utilizar o software de forma correta.</p>
<p>Aqui estarão presentes também os tópicos mais comuns que ajudam a aprender a utilizar o software 
mais rapidamente.</p>`
})
export class AjudaComponent {
    constructor() {
        console.log('AjudaComponent::constructor()');
    }
}