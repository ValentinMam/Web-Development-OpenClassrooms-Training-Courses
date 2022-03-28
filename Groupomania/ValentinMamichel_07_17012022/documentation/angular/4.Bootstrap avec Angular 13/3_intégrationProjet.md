Intégration de bootstrap dans angular
Passons maintenant à la partie logique.
Nous allons faire fonctionner cette page home dans notre projet Angular de base.

Tout d'abord il nous faut rajouter les librairies nécessaires.
On utilise pour cela npm (node package manager) le gestionnaire de dépendances de Nodes.js​​​​​

Pour bootstrap on suivra les conseils sur le site officiel.
https://v5.getbootstrap.com/docs/5.1/getting-started/download/

# Rajout des dépendances dans package.json

npm install --save bootstrap
npm install --save @fortawesome/fontawesome-free
Comme nous l'avons vu dans le tutoriel Démarrer avec angular nous modifierons les descripteurs de version de dépendances.

Concernant les dépendances et leur version la documentation npm est la suivante
https://docs.npmjs.com/files/package.json#dependencies

Ce qui nous donnera le résultat suivant.

package.json
"@fortawesome/fontawesome-free": "5.15.4",
"bootstrap": "5.1.3",
"rxjs": "7.4.0",
"tslib": "2.3.1",
"zone.js": "0.11.4"

Mise à jour
Réutilisons donc les éléments de notre prototype.
Copiez tout le répertoire params de notre prototype dans notre application angular au niveau de src/assets

Nous allons modifier le fichier angular.json afin d'appeler les fichiers nécessaires au fonctionnement de nos pages html.

Fichiers de mise en forme css

- index.css (spécifique à notre projet via params)
- all.min.css (spécifique à fontawesome via node_modules)
- bootstrap.min.css (spécifique à bootstrap via node_modules)

Fichiers des scripts javascript

- bootstrap.min.js(spécifique à bootstrap via node_modules)
  Remarque
  Dans notre cas nous utiliserons le fichier bootstrap.bundle.min.js
  Nous pourrons alors utiliser les composants Bootstrap de type Toasts ,Tooltips ou Popovers

https://v5.getbootstrap.com/docs/5.1/components/tooltips/

https://v5.getbootstrap.com/docs/5.1/components/popovers/

https://v5.getbootstrap.com/docs/5.1/components/toasts/

index.js
Pour rajouter le code spécifique à notre projet ici

Remarque : Dans le cas de la version 5
Je préfère le rajouter sur app.component en fin de chargement de page et éviter les problèmes
Cela évite d'utiliser des fonctions du type document.ready par exemple

1. angular.json
   "build": {
   "builder": "@angular-devkit/build-angular:browser",
   "options": {
   "outputPath": "dist/angular-starter",
   "index": "src/index.html",
   "main": "src/main.ts",
   "polyfills": "src/polyfills.ts",
   "tsConfig": "tsconfig.app.json",
   "assets": [
   "src/favicon.ico",
   "src/assets"
   ],
   "styles": [
   "node_modules/@fortawesome/fontawesome-free/css/all.min.css",
   "node_modules/bootstrap/dist/css/bootstrap.min.css",
   "src/assets/params/css/fonts.googleapis.min.css",
   "src/styles.css"
   ],
   "scripts": [
   "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
   ]
   },
   src/style.css
   body {
   padding-top: 3.5rem;
   font-family: "Roboto", sans-serif;
   }
   Nous allons modifier les fichiers suivants qui contiendront la nouvelle interface

- app.component.html
- app.component.css
- home.component.html
- home.component.ts
- home.component.css
- environment.prod.ts
- environment.ts
- app.component.spec.ts
- about.css
- signin.css
- contact.css
  Nous rajouterons les images utilisées dans le répertoire assets/params/images/logo

ganatan.png
src/app/app.component.html

<header class="navbar navbar-expand-md navbar-dark fixed-top nga-navbar">
  <nav class="container" aria-label="Main navigation">
    <a href="" class="navbar-brand" alt="Accueil" aria-label="Ganatan">
      <img src="./assets/params/images/logo/ganatan-logo.png" srcset="./assets/params/images/logo/ganatan-logo.png,
      ./assets/params/images/logo/ganatan-logo@2x.png 2x" width="25" height="25" alt="Logo Ganatan">
      <span class="nga-logo mx-1">ganatan</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
      aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" routerLink="/">
            <i class="fas fa-home me-1"></i>Home</a>
        </li>
      </ul>
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" routerLink="/about">
            <i class="far fa-question-circle me-1"></i>About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" routerLink="/contact">
            <i class="fas fa-envelope me-1"></i>Contact</a>
        </li>
      </ul>
      <form class="d-flex">
        <button type="button" class="btn btn-sm nga-btn-navbar me-2" routerLink="/signup"><i
            class="fas fa-user-plus me-2"></i>Sign up</button>
        <button type="button" class="btn btn-sm btn-outline-light me-2" routerLink="/login"><i
            class="fas fa-sign-in-alt me-2"></i>Login</button>
      </form>
    </div>
  </nav>
</header>

<main>
  <router-outlet></router-outlet>
</main>

<footer class="nga-footer">
  <div class="py-3 text-center" style="background-color: black;">
    <div class="container">
      2021 :<a href="https://www.ganatan.com/"> www.ganatan.com</a>
    </div>
  </div>
</footer>
src/app/app.component.css
.navbar.navbar-dark .navbar-nav .nav-item .nav-link {
  color: white;
  font-weight: 500;
  border-top: 1px solid #09238d;
  border-bottom: 1px solid #09238d;
}

.navbar.navbar-dark .navbar-nav .nav-item .nav-link:hover {
color: yellow;
border-top: 1px solid yellow;
border-bottom: 1px solid yellow;
}

.nga-navbar {
-webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 11px 10px 0 rgba(0, 0, 0, 0.12);
box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 11px 10px 0 rgba(0, 0, 0, 0.12);
background-color: #09238d;
}

.nga-navbar-logo {
font-weight: 700;
}

.nga-navbar-logo:hover {
color: rgba(255, 255, 255, 0.75);
}

.nga-btn-navbar {
color: #fff;
background-color: #1976d2;
border-color: #0d6efd;
}

.nga-btn-navbar:hover {
color: white;
background-color: #0b5ed7;
border-color: #0a58ca;
}

.nga-logo {
font-weight: 700;
}

.nga-logo:hover {
color: rgba(255, 255, 255, 0.75);
}

.nga-footer {
background-color: #212121;
color: white;
}

.nga-footer a {
color: white;
text-decoration: none
}

.nga-footer a:hover,
.nga-footer a:focus {
color: yellow;
text-decoration: underline;
}

.nga-footer .hint {
background-color: #1976d2;
}

.nga-footer .hint:hover {
opacity: 0.8;
}
src/app/modules/general/home/home.component.html

<div class="container py-5">
  <div class="row">
    <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 text-center mb-2">
      <h1 class="h5">
        <i class="fas fa-laptop fa-lg me-2 text-primary"></i>
        angular-starter
        <i class="fas fa-mobile-alt fa-lg ms-2 text-primary"></i>
      </h1>
    </div>
    <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3 text-center text-danger mb-2">
      <h2 class="h5">
        Angular 13.0.2<i class="fab fa-angular fa-lg ms-2"></i>
      </h2>
    </div>
    <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3 text-center text-primary mb-2">
      <h2 class="h5">
        Bootstrap 5.1.3<i class="fab fa-bootstrap fa-lg ms-2"></i>
      </h2>
    </div>
    <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3 text-center text-success mb-2">
      <h2 class="h5">
        Font Awesome 5.15.4<i class="fab fa-font-awesome-flag fa-lg ms-2"></i>
      </h2>
    </div>
  </div>
  <hr>
  <div class="row mb-2">
    <div class="col-md-12 text-center mb-4">
      <h3 class="h5">Features<i class="fas fa-list ms-2"></i></h3>
    </div>
  </div>
  <div class="row pt-2">
    <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-2">
      <div class="nga-card bg-light mb-3">
        <a routerLink="/bootstrap">
          <div class="card-header">
            <div class="row">
              <div class="col-10 col-xl-10">
                <h5 class="card-title">Bootstrap</h5>
              </div>
              <div class="col-2 col-xl-2">
                <i class="fab fa-bootstrap fa-lg text-primary"></i>
              </div>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text">How to use Buttons, Alerts, Pagination, Tables, Collapses</p>
          </div>
        </a>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-2">
      <div class="nga-card bg-light mb-3">
        <div class="card-header">
          <div class="row">
            <div class="col-10 col-xl-10">
              <h5 class="card-title">Services</h5>
            </div>
            <div class="col-2 col-xl-2">
              <i class="fas fa-handshake fa-lg text-primary"></i>
            </div>
          </div>
        </div>
        <div class="card-body">
          <p class="card-text">Use services to view a playlist and a youtube player</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-2">
      <div class="nga-card bg-light mb-3">
        <div class="card-header">
          <div class="row">
            <div class="col-10 col-xl-10">
              <h5 class="card-title">Components</h5>
            </div>
            <div class="col-2 col-xl-2">
              <i class="far fa-clone  fa-lg text-primary"></i>
            </div>
          </div>
        </div>
        <div class="card-body">
          <p class="card-text">Channel component with Input, Output and Event Emitter</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-2">
      <div class="nga-card bg-light mb-3">
        <div class="card-header">
          <div class="row">
            <div class="col-10 col-xl-10">
              <h5 class="card-title">Reactive Forms</h5>
            </div>
            <div class="col-2 col-xl-2">
              <i class="far fa-file-alt fa-lg text-primary"></i>
            </div>
          </div>
        </div>
        <div class="card-body">
          <p class="card-text">A model-driven approach to handling form inputs</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-2">
      <div class="nga-card bg-light mb-3">
        <div class="card-header">
          <div class="row">
            <div class="col-10 col-xl-10">
              <h5 class="card-title">Template Driven Forms</h5>
            </div>
            <div class="col-2 col-xl-2">
              <i class="far fa-file-alt fa-lg text-primary"></i>
            </div>
          </div>
        </div>
        <div class="card-body">
          <p class="card-text">Forms are the mainstay of business applications</p>
        </div>
      </div>
    </div>
  </div>
</div>
src/app/modules/general/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

constructor(
@Inject(PLATFORM_ID) private platformId: object) {
}

ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      let navMain = document.getElementById('navbarCollapse');
      if (navMain) {
        navMain.onclick = function () {
          if (navMain) {
            navMain.classList.remove("show");
          }
        }
      }
    }

}

}
src/app/modules/general/home/home.component.css
.nga-card {
display: block;
background-color: rgba(255, 255, 255, .8);
box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);
border-radius: 2px;
transition: all .2s ease-in-out;
cursor: pointer;
}

.nga-card:hover {
box-shadow: 0 10px 20px rgba(0, 0, 0, .19), 0 6px 6px rgba(0, 0, 0, .23);
}
src/environments/environments.ts
export const environment = {
production: false,
application:
{
name: 'angular-starter',
angular: 'Angular 13.1.1',
bootstrap: 'Bootstrap 5.1.3',
fontawesome: 'Font Awesome 5.15.4',
}
};
src/environments/environments.prod.ts
export const environment = {
production: true,
application:
{
name: 'angular-starter',
angular: 'Angular 13.1.1',
bootstrap: 'Bootstrap 5.1.3',
fontawesome: 'Font Awesome 5.15.4',
}
};
src/app/app.component.spec.ts
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

});
src/app/modules/general/about/about.html

<p class="text-center">about works!</p>
src/app/modules/general/contact/contact.html
<div class="row">
  <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
    <p class="text-center">contact works!</p>
    <ul>
      <li><a routerLink="/contact/mailing">Mailing</a></li>
      <li><a routerLink="/contact/map">Map</a></li>
    </ul>
  </div>
  <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
    <router-outlet></router-outlet>
  </div>
</div>
src/app/modules/general/signup/signup.html
<p class="text-center">signup works!</p>
src/app/modules/general/not-found/not-found.html
<p class="text-center">not-found works!</p>
Composants Bootstrap
Le projet final intègre un module permettant de tester les composants de Bootstrap.

Le code étant trop long je ne l'indique pas dans ce tutoriel.
Néanmoins le source complet est disponible sur Github.

Il est rajouté via le routing dans les fichiers suivants

app-routing.module.ts
{
path: 'bootstrap',
loadChildren: () => import('./modules/application/example-bootstrap/tutorial.module')
.then(mod => mod.TutorialModule)
},
