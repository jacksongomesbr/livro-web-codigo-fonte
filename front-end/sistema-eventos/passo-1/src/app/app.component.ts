import { Component } from '@angular/core';
import '../../public/css/styles.css';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mes : string = 'Agosto';
  eventos : string[] = [
    'XVII ICISO - International Conference on Informatics and Semiotics in Organisations',
    'ERAD-SP - VII Escola Regional de Alto Desempenho - SP',
    'Semcomp - 19ª Semana da Computação',
    'Chip on the Mountains 2016',
    'SMSI - Simpósio Mineiro de Sistemas de Informação'
  ]
}