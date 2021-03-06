import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRouting } from './app.router';
import { AuthService } from './login/auth.service';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MercadoModule } from './domain/mercado/mercado.module'; 
import { MeusAfiliadosModule } from './domain/meus-afiliados/meus-afiliados.module';
import { PainelModule } from './domain/painel/painel.module'
import { UsuarioModule } from './domain/usuario/usuario.module'
import { LoginModule } from './login/login.module'
import { SaldoModule } from './domain/saldo/saldo.module'
import { ProdutoModule } from './domain/produto/produto.module'

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    AppRouting,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule, 
    NgbAlertModule,
    NgbModule,
    FontAwesomeModule,
    MercadoModule,
    MeusAfiliadosModule,
    PainelModule,
    UsuarioModule,
    LoginModule,
    SaldoModule,
    ProdutoModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
