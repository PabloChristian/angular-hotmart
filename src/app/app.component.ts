import { Component, PipeTransform } from '@angular/core';

import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { AuthService } from './login/auth.service'

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Menu } from './menu.list';

const MENU: Menu[] = [
  {
    rota: '/painel',
    icon: 'insert_chart',
    label: 'Painel'
  },
  {
    rota: '/mercado',
    icon: 'store_mall_directory',
    label: 'Mercado'
  },
  {
    rota: '/afiliado',
    icon: 'people_alt',
    label: 'Meus Afiliados'
  },
  {
    rota: '/produto',
    icon: 'widgets',
    label: 'Produtos'
  },
  {
    rota: '/saldo',
    icon: 'attach_money',
    label: 'Saldo'
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DecimalPipe]
})

export class AppComponent {
  //MOSTRAR MENU
  mostrarMenu: boolean = false;
  loginON: boolean = false;

  menus$: Observable<Menu[]>;
  filter = new FormControl('');

  constructor(pipe: DecimalPipe, private authService: AuthService) {
    this.menus$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text, pipe))
    );
  }
 
  search(text: string, pipe: PipeTransform): Menu[] {
    return MENU.filter(menu => {
      const term = text.toLowerCase();
      return menu.label.toLowerCase().includes(term);
    });
  }

  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar, 
      mostrar => this.loginON = mostrar
    );
  }
}