import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRouting } from "src/app/app.router";
import { VMessageModule } from "src/app/shared/components/vmessage/vmessage.module";
import { UsuarioComponent } from "./usuario.component";

@NgModule({
    declarations: [ UsuarioComponent ],
    exports: [ UsuarioComponent ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        AppRouting,
        VMessageModule
    ]
})
export class UsuarioModule {

}