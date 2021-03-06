import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) { }

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  fazerLogin(usuario: Usuario) {
    if ((usuario.email === "root" || usuario.email === "admin") && usuario.password === "") {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/painel']);
      // this.toastr.success('Seja bem-vindo ao AngularMart', "Bem-Vindo");
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
      this.toastr.error('Usuário/Senha incorreta.', 'Eii usuário!');
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
