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
  mes: string = 'Agosto';
  filtro: string = "";
  cadastrar: boolean = false;
  eventoEditar: Evento = null;
  eventoNovo: Evento = new Evento(0, '', 'Palmas', 'Tocantins');
  ultimoId: number = 5;

  eventos: Evento[] = [
    new Evento(1, 'XVII ICISO - International Conference on Informatics and Semiotics in Organisations', 'Palmas', 'Tocantins'),
    new Evento(2, 'ERAD-SP - VII Escola Regional de Alto Desempenho - SP', 'São Paulo', 'São Paulo'),
    new Evento(3, 'Semcomp - 19ª Semana da Computação', 'Porto Alegre', 'Rio Grande do Sul'),
    new Evento(4, 'Chip on the Mountains 2016', 'São Paulo', 'São Paulo'),
    new Evento(5, 'SMSI - Simpósio Mineiro de Sistemas de Informação', 'Belo Horizonte', 'Minas Gerais')
  ]

  estados = [
    'Minas Gerais',
    'São Paulo',
    'Rio Grande do Sul',
    'Tocantins',
    'Goiás'
  ];

  cidades = [
    { estado: "Tocantins", nome: 'Palmas' },
    { estado: "Goiás", nome: 'Goiânia' },
    { estado: "Tocantins", nome: 'Paraíso do Tocantins' },
    { estado: "São Paulo", nome: 'São Paulo' },
    { estado: "Rio Grande do Sul", nome: 'Porto Alegre' },
    { estado: "Minas Gerais", nome: 'Belo Horizonte' },
  ];

  getCidades(estado: string) {
    let e: any[] = [];
    this.cidades.forEach(cidade => {
      if (estado != '' && estado == cidade.estado) {
        e.push(cidade);
      }
    });
    return e;
  }

  listarEventos(cidade: string = "") {
    let e: Evento[] = [];
    this.eventos.forEach(evento => {
      if (evento.cidade.toLowerCase().indexOf(cidade.toLowerCase()) != -1) {
        e.push(evento);
      }
    });
    return e;
  }

  mostrarDetalhes(evento: Evento) {
    this.desativarCadastrar();
    if (this.eventoEditar && this.eventoEditar.id == evento.id) {
      this.eventoEditar = null;
    } else {
      this.eventoEditar = evento;
    }
  }

  fecharEditor() {
    this.eventoEditar = null;
  }

  ativarCadastrar() {
    this.cadastrar = true;
    this.iniciarNovoEvento();
  }

  desativarCadastrar() {
    this.cadastrar = false;
    this.iniciarNovoEvento();
  }

  iniciarNovoEvento() {
    this.eventoNovo = new Evento(0, '', 'Palmas', 'Tocantins');
  }

  salvar() {
    let novo: Evento = Object.create(this.eventoNovo);
    this.ultimoId++;
    novo.id = this.ultimoId;
    this.eventos.push(novo);
    this.iniciarNovoEvento();
  }

  excluir() {
    if (confirm('Tem certeza que deseja excluir o evento ' + this.eventoEditar.nome + '?')) {
      this.eventos = this.eventos.filter(evento => {
        return evento.id != this.eventoEditar.id;
      });
      this.eventoEditar = null;
    }
  }
}