Un rapide tour d'horizon avant de voir les détails techniques

Angular propose une librairie angular@routeur qui permet de gérer le routing.

Nous importerons cette librairie dans un module dédié au routage.
Ce module portera le nom suivant app-routing.module.ts

La configuration du "Routing" sera transmise au module RouterModule

Tout au long de ce didacticiel nous essaierons d'utiliser les commandes que propose angular-cli pour genérer automatiquement le code source nécessaire.

Tout d'abord nous allons créer six composants qui seront utilisés dans le routing.
Un composant correspondra à une page Web.
Ce sont cinq pages Web classiques que l'on retrouve dans tout site web.

- Home
- Contact
- About
- Login
- Signup
- NotFound

Angular Router
Nous utiliserons angular CLI pour cela.

Exécutons les commandes suivantes.

ng g correspond à la commande ng generate

# Création des nouveaux composants

ng generate component modules/general/home --module=app
ng generate component modules/general/contact --module=app
ng generate component modules/general/about --module=app
ng generate component modules/general/login --module=app
ng generate component modules/general/signup --module=app
ng generate component modules/general/not-found --module=app

<!-- ng generate component modules/home --module=app
ng generate component modules/contact --module=app
ng generate component modules/about --module=app
ng generate component modules/login --module=app
ng generate component modules/signup --module=app
ng generate component modules/not-found --module=app -->

# Création des nouveaux composants (méthode 2)

ng g c modules/general/home --module=app
ng g c modules/general/contact --module=app
ng g c modules/general/about --module=app
ng g c modules/general/login --module=app
ng g c modules/general/signup --module=app
ng g c modules/general/not-found --module=app

Les répertoires modules et modules/general sont créés par la commande éxécutée.
Tous les fichiers relatifs à chaque composant sont créés automatiquement par angular CLI.

Par exemple pour le composant Home 4 fichiers sont créés

- home.component.css (code CSS dédié au design)
- home.component.html (code HTML)
- home.component.spec.ts (code de test unitaire du composant)
- home.component.ts (partie logique en typescript de notre composant)

Le fichier app.module.ts est automatiquement modifié comme suit.

Les 6 composants sont importés dans le module app.module.ts
Puis sont utilisés dans le décorateur (decorator) @ngModule au niveau de son objet metadata declarations.

src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { ContactComponent } from './modules/general/contact/contact.component';
import { AboutComponent } from './modules/general/about/about.component';
import { LoginComponent } from './modules/general/login/login.component';
import { SignupComponent } from './modules/general/signup/signup.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
declarations: [
AppComponent,
HomeComponent,
ContactComponent,
AboutComponent,
LoginComponent,
SignupComponent,
NotFoundComponent
],
imports: [
BrowserModule,
AppRoutingModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
Nous suivrons maintenant les conseils suivants d'Angular https://angular.io/tutorial/toh-pt5

La meilleure pratique consiste à charger et à configurer le router dans un module dédié au routing.
Ce module sera ensuite importé par dans le module App (appModule).
Par convention le module sera nommé AppRoutingModule dans le fichier app-routing.module.ts et situé dans le répertoire src/app.

Nous créerons donc "app-routing.module.ts"

# Création du routing

ng generate module app-routing --flat --module=app

# Création du routing (méthode 2)

ng g m app-routing --flat --module=app

Il faut ensuite modifier les fichiers suivants

- app-routing.module.ts
- styles.css
- app.component.html
- app.component.css
- app.component.ts
- app.component.spec.ts
- app.e2e-spec.ts
- app.po.ts

Ce qui permettra de traiter le routage désiré et les composants appelés.

<!--  -->

1. src/app/app-routing.module.ts

- Importer les modules Routes et RouterModule
- Configurer les Routes
- Appeler la méthode forRoot de RouterModule

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './modules/general/about/about.component';
import { ContactComponent } from './modules/general/contact/contact.component';
import { HomeComponent } from './modules/general/home/home.component';
import { LoginComponent } from './modules/general/login/login.component';
import { SignupComponent } from './modules/general/signup/signup.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
{ path: '', component: HomeComponent, },
{ path: 'contact', component: ContactComponent },
{ path: 'about', component: AboutComponent },
{ path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: '**', component: NotFoundComponent }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
declarations: []
})
export class AppRoutingModule { }

2. src/styles.css

body {
color: black;
font-weight: 400;
}

Dans le composant AppComponent nous prendrons soin de rajouter l'élément <router-outlet> au niveau du fichier app.component.html.Il indiquera au router ou afficher les éléments graphiques routés. L'élément routerLink permettra de créer le lien vers les pages souhaitées.

3. src/app/app.component.html

<div class="app">
  <header>
    <section>
      <h1>{{ title }}</h1>
      <h2> {{ version }}</h2>
    </section>
    <nav>
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/about">About</a></li>
        <li><a routerLink="/contact">Contact</a></li>
        <li><a routerLink="/login">Login</a></li>
        <li><a routerLink="/signup">Signup</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <router-outlet></router-outlet>
  </main>

  <footer>
    <a href="https://www.ganatan.com/">2021 - www.ganatan.com</a>
  </footer>

</div>

4. src/app.component.css

h1 {
color: blue;
}

.app {
font-family: Arial, Helvetica, sans-serif;
max-width: 500px;
margin: auto;
}

5. src/app.component.ts

import { Component } from '@angular/core';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'angular-starter';
version = 'Angular version 13.1.1';
}
Il nous faut rajouter le module RouterTestingModule au niveau des tests unitaires du composant App.
Ce rajout se fait au niveau du fichier de test correspondant app.component.spec.ts.

6. src/app/app.component.spec.ts

import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
beforeEach(async () => {
await TestBed.configureTestingModule({
imports: [
RouterTestingModule
],
declarations: [
AppComponent
],
}).compileComponents();
});

it('should create the app', () => {
const fixture = TestBed.createComponent(AppComponent);
const app = fixture.componentInstance;
expect(app).toBeTruthy();
});

it(`should have as title 'angular-starter'`, () => {
const fixture = TestBed.createComponent(AppComponent);
const app = fixture.componentInstance;
expect(app.title).toEqual('angular-starter');
});

it('should render title', () => {
const fixture = TestBed.createComponent(AppComponent);
fixture.detectChanges();
const compiled = fixture.nativeElement as HTMLElement;
expect(compiled.querySelector('h1')?.textContent).toContain('angular-starter');
});
});
