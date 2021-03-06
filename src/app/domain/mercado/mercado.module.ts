import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRouting } from 'src/app/app.router';
import { MercadoComponent } from './mercado.component';

@NgModule({
    declarations: [ MercadoComponent ],
    exports: [ MercadoComponent ],
    imports: [ 
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        AppRouting
    ]
})
export class MercadoModule {

}