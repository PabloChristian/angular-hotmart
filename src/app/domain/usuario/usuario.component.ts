import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarioForm: FormGroup;

  constructor(
    private builder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.usuarioForm = this.builder.group({
        nomeCompleto: ['', Validators.required],
        email: ['', Validators.required],
        documento: ['', Validators.required],
        senha: ['', Validators.required],
        dataDeNascimento: ['', Validators.required],
        confirmarSenha: ['', Validators.required]
    });
  }

}
