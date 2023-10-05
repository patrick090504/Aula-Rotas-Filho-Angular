import { NgModule } from "@angular/core";
import { ProdutoComponent } from "../produtos/produto.component";
import { DetalhesComponent } from "../detalhes/detalhes.component";
import { RouterModule } from "@angular/router";
import { ValorComponent } from "../valor/valor.component";

@NgModule({
    declarations: [ProdutoComponent, DetalhesComponent, ValorComponent],
    imports:[RouterModule]
})
export class ProdutosModule{

}