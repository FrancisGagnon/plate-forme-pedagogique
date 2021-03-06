import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BiblioComponent } from './biblio/biblio.component';
import { ConnecterUtilisateurComponent } from './utilisateurs/connecter-utilisateur/connecter-utilisateur.component';
import { CreerUtilisateurComponent } from './utilisateurs/creer-utilisateur/creer-utilisateur.component';
import { ModifierUtilisateurComponent } from './utilisateurs/modifier-utilisateur/modifier-utilisateur.component';
import { RecupererMotDePasseComponent } from './utilisateurs/recuperer-mot-de-passe/recuperer-mot-de-passe.component';


@NgModule({
  declarations: [
    AppComponent,
    BiblioComponent,
    ConnecterUtilisateurComponent,
    CreerUtilisateurComponent,
    ModifierUtilisateurComponent,
    RecupererMotDePasseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
