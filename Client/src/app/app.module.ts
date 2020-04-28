import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { OffreComponent } from './offre/offre.component';
import {Offreservice} from './services/offreservice';

@NgModule({
  declarations: [
    AppComponent,
    OffreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [Offreservice],
  bootstrap: [AppComponent]
})
export class AppModule {
}
