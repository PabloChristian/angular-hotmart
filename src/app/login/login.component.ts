import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario'
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //DECLARACAO DE ICONES

  loginForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;
  usuario: Usuario;
  submitted = false;

  constructor(
    private builder: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.builder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get formFields() {
    return this.loginForm.controls;
  }

  realizarLogin(usuario: Usuario) {
    this.submitted = true;

    this.authService.fazerLogin(this.loginForm.value);
    this.emailInput.nativeElement.focus();
    this.loginForm.reset();
    
    if (this.loginForm.invalid) {
      Object.keys(this.loginForm.controls).forEach(campo => {
        const controle = this.loginForm.get(campo);
        controle.markAsDirty;
      });
    }
  }
}