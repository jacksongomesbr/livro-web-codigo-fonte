import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { Evento } from './evento';
import '../../public/css/styles.css';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  eventoAtivo : Evento = null;
  mes : string = 'Agosto';
  filtro: string = "";

  eventos : Evento[] = [
    new Evento(1, 'XVII ICISO - International Conference on Informatics and Semiotics in Organisations', 'Palmas'),
    new Evento(2, 'ERAD-SP - VII Escola Regional de Alto Desempenho - SP', 'São Paulo'),
    new Evento(3, 'Semcomp - 19ª Semana da Computação', 'Porto Alegre'),
    new Evento(4, 'Chip on the Mountains 2016', 'São Paulo'),
    new Evento(5, 'SMSI - Simpósio Mineiro de Sistemas de Informação', 'Belo Horizonte')
  ]

  listarEventos(cidade: string = "") {
    let e : Evento[] = [];
    this.eventos.forEach(evento => {
      if (evento.cidade.toLowerCase().indexOf(cidade.toLowerCase()) != -1) {
        e.push(evento);
      } 
    });
    return e;
  }

  mostrarDetalhes(evento: Evento) {
    if (this.eventoAtivo && this.eventoAtivo.id == evento.id) {
      this.eventoAtivo = null;
    } else {
      this.eventoAtivo = evento;
    }
  }
}