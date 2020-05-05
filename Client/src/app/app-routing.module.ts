import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OffreComponent} from './offre/offre.component';
import {NvoffreComponent} from './nvoffre/nvoffre.component';



const routes: Routes = [
  {path : "offres" , component :OffreComponent},
  {path : "nvoffre" , component: NvoffreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
