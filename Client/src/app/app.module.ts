import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

//import firebase module
import{AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import{environment} from '../environments/environment';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { OffreComponent } from './offre/offre.component';
import {Offreservice} from './services/offreservice';
import { NvoffreComponent } from './nvoffre/nvoffre.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffreEditComponent } from './offre-edit/offre-edit.component';
import { ListoffresComponent } from './Acceuil/listoffres/listoffres.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    OffreComponent,
    NvoffreComponent,
    NavbarComponent,
    OffreEditComponent,
    ListoffresComponent,
    LoginComponent,
    AuthenticationComponent,
    DashboardComponent,
  ],
  imports: [
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
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
