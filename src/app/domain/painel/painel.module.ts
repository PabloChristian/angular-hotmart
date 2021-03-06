import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRouting } from "src/app/app.router";
import { PainelComponent } from "./painel.component";

@NgModule({
    declarations: [ PainelComponent ],
    exports: [ PainelComponent ],
    imports: [
        AppRouting,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class PainelModule {

}