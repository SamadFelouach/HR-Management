import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OffreComponent} from './offre/offre.component';
import {NvoffreComponent} from './nvoffre/nvoffre.component';
import {OffreEditComponent} from './offre-edit/offre-edit.component';



const routes: Routes = [
  {path : "offres" , component :OffreComponent},
  {path : "nvoffre" , component: NvoffreComponent},
  {path : "editoffre/:id" , component: OffreEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
