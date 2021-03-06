import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRouting } from "../app.router";
import { VMessageModule } from "../shared/components/vmessage/vmessage.module";
import { LoginComponent } from "./login.component";

@NgModule({
    declarations: [ LoginComponent ],
    exports: [ LoginComponent ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        AppRouting,
        VMessageModule
    ]
})
export class LoginModule {

}