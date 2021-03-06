import { NgModule } from "@angular/core";
import { AppRouting } from "src/app/app.router";
import { SaldoComponent } from "./saldo.component";

@NgModule({
    declarations: [ SaldoComponent ],
    exports: [ SaldoComponent ],
    imports: [
        AppRouting
    ]
})
export class SaldoModule {

}