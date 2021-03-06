import { NgModule } from "@angular/core";
import { AppRouting } from "src/app/app.router";
import { ProdutoComponent } from "./produto.component";

@NgModule({
    declarations: [ ProdutoComponent ],
    exports: [ ProdutoComponent ],
    imports: [
        AppRouting
    ]
})
export class ProdutoModule {

}