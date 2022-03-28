# Théorie

La vitesse à laquelle s'affiche un site web est l'un des critères les plus essentiels pour l'utilisateur.
Et cette vitesse s'apprécie en secondes.
Au-delà de 3 secondes 57% des utilisateurs quittent purement et simplement le site.

Quelles méthodes ou techniques doit-on alors utiliser pour que notre site web se charge rapidement ?

L'une des techniques est le lazy loading (“chargement fainéant ou paresseux” en français).
Il a pour effet d'accélérer le fonctionnement d'un site web.
Il permet de spécifier quelles parties d'un site web doivent être chargées lors du démarrage.

Avant d'aller plus loin il nous faut comprendre comment fonctionne Angular.
La commande qui nous intéresse concerne la compilation de notre projet.

Dans notre fichier package.json il s'agit de la commande

ng build
Sans rentrer dans les détails cette commande utilise Webpack (un module bundler).
Grâce à Webpack angular utilise les fichiers de notre projet , les compile pour générer dans le répertoire dist un certain nombre de fichiers que nous pourrons déployer sur un serveur web.

Le projet qui nous sert de base dipose de 6 pages Web

- Home
- About
- Contact
- Login
- Signup
- notfound

La compilation de notre code source génère notamment un fichier main.js qui contient le code de ces 6 pages.
Pour vérifier cette théorie il suffit d'ouvrir le fichier dist/angular-starter/main.js faire une recherche sur le code utilisé dans chacune des 6 pages

home works! (code utilisé dans home.component.html)
not-found works! (code utilisé dans not-found.component.html)
contact works! (code utilisé dans contact.component.html)
login works! (code utilisé dans login.component.html)
signup works! (code utilisé dans signup.component.html)
about works! (code utilisé dans about.component.html)
Ce fichier et d'autres seront appelés lors de l'affichage du site Web.
Plus le nombre de pages sera grand, plus le fichier sera volumineux et plus l'affichage sera lent.

Le principe du lazy loading va consister à scinder ce fichier en plusieurs parties qui ne seront chargées qu'en temps voulu.

# Pratique

Le lazy loading fonctionne en utilisant la notion de modules et non plus celle des composants.

Nous utiliserons la documentation Angular pour appliquer cette technique.
https://angular.io/guide/lazy-loading-ngmodules

Nous allons adapter notre architecture, en créant un module pour chaque élément à afficher.
Home et not-found resteront gérés de façon classique sous forme de composants.

Utilisons la commande ng generate module que nous offre angular-cli.

# Création des modules

ng generate module modules/general/contact --routing --module=app
ng generate module modules/general/login --routing --module=app
ng generate module modules/general/signup --routing --module=app
ng generate module modules/general/about --routing --module=app

<!-- ng generate module modules/contact --routing --module=app
ng generate module modules/login --routing --module=app
ng generate module modules/signup --routing --module=app
ng generate module modules/about --routing --module=app -->

# Création des modules (méthode 2)

ng g m modules/general/contact --routing --module=app
ng g m modules/general/login --routing --module=app
ng g m modules/general/signup --routing --module=app
ng g m modules/general/about --routing --module=app

Les fichiers nécessaires à chaque composant sont créés automatiquement.
Par exemple pour le composant Contact :

- contact-routing.module.ts
- contact.module.ts

Le fichier app.module.ts est automatiquement modifié comme suit.

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
import { ContactModule } from './modules/general/contact/contact.module';
import { LoginModule } from './modules/general/login/login.module';
import { SignupModule } from './modules/general/signup/signup.module';
import { AboutModule } from './modules/general/about/about.module';

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
AppRoutingModule,
ContactModule,
LoginModule,
SignupModule,
AboutModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }

Nous devons procéder à certaines modifications sur les fichiers suivants :

- app-routing.module.ts
- app.module.ts
- about-routing.module.ts
- about.module.ts
- contact-routing.module.ts
- contact.module.ts

Le lazy loading sera appliqué sur Contact, About, Login et Signup
Au niveau de AppRoutingModule, nous devons mettre à jour les routes en utilisant loadchildren.

1. src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
{ path: '', component: HomeComponent, },
{
path: 'contact',
loadChildren: () => import('./modules/general/contact/contact.module')
.then(mod => mod.ContactModule)
},
{
path: 'about',
loadChildren: () => import('./modules/general/about/about.module')
.then(mod => mod.AboutModule)
},
{
path: 'login',
loadChildren: () => import('./modules/general/login/login.module')
.then(mod => mod.LoginModule)
},
{
path: 'signup',
loadChildren: () => import('./modules/general/signup/signup.module')
.then(mod => mod.SignupModule)
},
{ path: '**', component: NotFoundComponent }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
declarations: []
})
export class AppRoutingModule { }

Il nous faut modifier le module AppModule et ne laisser que les composants HomeComponent et NotFoundComponent

2. src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
declarations: [
AppComponent,
HomeComponent,
NotFoundComponent
],
imports: [
BrowserModule,
AppRoutingModule,
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }

Il ne reste plus qu'à modifier les fichiers de routing et module pour Contact, Login, Signup et About.

3. src/app/modules/general/about/about-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

const routes: Routes = [
{ path: '', component: AboutComponent },
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AboutRoutingModule { }

4. src/app/modules/general/about/about.module.ts
   import { NgModule } from '@angular/core';
   import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
imports: [
CommonModule,
AboutRoutingModule
],
exports: [
AboutComponent
],
declarations: [
AboutComponent
],
providers: [
],
})
export class AboutModule { }

5. src/app/modules/general/contact/contact-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';

const routes: Routes = [
{ path: '', component: ContactComponent },
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ContactRoutingModule { }

6. src/app/modules/general/contact/contact.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
imports: [
CommonModule,
ContactRoutingModule
],
exports: [
ContactComponent
],
declarations: [
ContactComponent
],
providers: [
],
})
export class ContactModule { }

7. src/app/modules/general/signup/signup-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup.component';

const routes: Routes = [
{ path: '', component: SignupComponent },
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class SignupRoutingModule { }

8. src/app/modules/general/signup/signup.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupComponent } from './signup.component';
import { SignupRoutingModule } from './signup-routing.module';

@NgModule({
imports: [
CommonModule,
SignupRoutingModule
],
exports: [
SignupComponent
],
declarations: [
SignupComponent
],
providers: [
],
})
export class SignupModule { }

9. src/app/modules/general/login/login-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

const routes: Routes = [
{ path: '', component: LoginComponent },
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class LoginRoutingModule { }

10. src/app/modules/general/login/login.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
imports: [
CommonModule,
LoginRoutingModule
],
exports: [
LoginComponent
],
declarations: [
LoginComponent
],
providers: [
],
})
export class LoginModule { }

# Vérification

Pour vérifier la théorie du lazy loading nous devons effectuer une nouvelle compilation (npm run build)

Dans le répertoire dist/angular-starter nous obtenons cette fois 5 fichiers

- main.js
- modules-general-about-about-module.js
- modules-general-contact-contact-module.js
- modules-general-login-login-module.js
- modules-general-signup-signup-module.js
  Remarque: Les noms peuvent être différents notamment avec des numéros c'est webpack qui gère le nommage.

Le code de chacune de nos 5 pages est maintenant disposé de la façon suivante

- home works! (code trouvé dans main.js)
- not-found works! (code trouvé dans main.js)
- contact works! (code trouvé dans modules-general-contact-contact-module.js)
- login works! (code trouvé dans modules-general-login-login-module.js)
- signup works! (code trouvé dans modules-general-signup-signup-module.js)
- about works! (code utilisé modules-general-about-about-module.js)

Si nous exécutons l'application (npm run start) nous pouvons voir dans Chrome (F12) au niveau de l'onglet Network comment les fichiers sont chargés.

Au lancement du site : main.js est appelé.
A la sélection de About : modules-general-about-about-module.js est appelé une seule fois
A la sélection de login: modules-general-login-login-module.js est appelé une seule fois
A la sélection de signup: modules-general-signup-signup-module.js est appelé une seule fois
A la sélection de Contact : modules-general-contact-contact-module.js est appelé une seule fois

Si nous lançons l'url localhost/contact

Dans ce cas main.js et seulement modules-general-contact-contact-module.js sont appelés

Conclusion :
Quelle que soit le nombre de pages, le fichier main.js aura toujours la même taille.
Le lancement du site qui charge le fichier main.js se fera toujours à la même vitesse.
