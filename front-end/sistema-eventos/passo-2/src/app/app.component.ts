import { Component } from '@angular/core';
import { Evento } from './evento';
import '../../public/css/styles.css';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mes : string = 'Agosto';
  eventos : Evento[] = [
    new Evento(1, 'XVII ICISO - International Conference on Informatics and Semiotics in Organisations'),
    new Evento(2, 'ERAD-SP - VII Escola Regional de Alto Desempenho - SP'),
    new Evento(3, 'Semcomp - 19ª Semana da Computação'),
    new Evento(4, 'Chip on the Mountains 2016'),
    new Evento(5, 'SMSI - Simpósio Mineiro de Sistemas de Informação')
  ]
}