import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProduitComponent} from './produit/produit.component';


const routes: Routes = [
  {path: 'produits', component: ProduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
