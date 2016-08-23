import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { Usuario } from './usuario';
import '../../public/css/styles.css';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuarioAtivo: Usuario = null;
  filtro: string = "";

  usuarios: Usuario[] = [
    new Usuario(1, 'José', 'jose', 'jose@gmail.com'),
    new Usuario(2, 'Maria', 'maria', 'maria@gmail.com'),
    new Usuario(3, 'Paulo', 'paulo', 'paulo@microsoft.com')
  ];

/*
  listar(filtro: string = "") {
    let lista: Usuario[] = [];
    this.usuarios.forEach(usuario => {
      if ((usuario.nome.toLowerCase().indexOf(filtro.toLowerCase()) != -1) || (usuario.login.toLowerCase().indexOf(filtro.toLowerCase()) != -1) || (usuario.email.toLowerCase().indexOf(filtro.toLowerCase()) != -1)) {
        lista.push(usuario);
      }
    });
    return lista;
  }
*/
  listar(filtro: string = "") {
    let lista: Usuario[] = this.usuarios.filter(usuario => {
      return ((usuario.nome.toLowerCase().indexOf(filtro.toLowerCase()) != -1) || (usuario.login.toLowerCase().indexOf(filtro.toLowerCase()) != -1) || (usuario.email.toLowerCase().indexOf(filtro.toLowerCase()) != -1));
    });
    return lista;
  }

  mostrarDetalhes(usuario: Usuario) {
    if (this.usuarioAtivo && this.usuarioAtivo.id == usuario.id) {
      this.usuarioAtivo = null;
    } else {
      this.usuarioAtivo = usuario;
    }
  }

  excluir(usuario: Usuario) {
    if (confirm('Tem certeza que deseja excluir o usuario ' + usuario.nome + '?')) {
      this.usuarios = this.usuarios.filter(u => {
        return u.id != usuario.id;
      });
    }
  }
}