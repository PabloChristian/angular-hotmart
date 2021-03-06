import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRouting } from "src/app/app.router";
import { MeusAfiliadosComponent } from "./meus-afiliados.component";

@NgModule({
    declarations: [ MeusAfiliadosComponent ],
    exports: [ MeusAfiliadosComponent ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        AppRouting
    ]
})
export class MeusAfiliadosModule {

}