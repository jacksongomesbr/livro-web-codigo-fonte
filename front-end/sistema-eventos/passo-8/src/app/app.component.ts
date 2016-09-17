import { Component } from '@angular/core';
import { Evento } from './evento';
import '../../public/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mes: string = 'Agosto';
  modo: string = 'listar';
  eventoSelecionado: Evento;

  cadastrar() {
    this.eventoSelecionado = new Evento(0, '', '', '');
    this.modo = 'editar';
  }

  onFechar() {
    this.eventoSelecionado = null;
    this.modo = 'listar';
  }

  editar(evento: Evento) {
    this.modo = 'editar';
    this.eventoSelecionado = evento;
  }

  detalhar(evento: Evento) {
    this.modo = 'detalhar';
    this.eventoSelecionado = evento;
  }

}