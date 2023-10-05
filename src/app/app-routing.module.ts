import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './produtos/produto.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ValorComponent } from './valor/valor.component';

const routes: Routes = [
  {path: "app-produto", component: ProdutoComponent, children:[
    {path: "app-detalhes", component: DetalhesComponent},
    {path: "app-valores", component: ValorComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
