L'outil que nous utiliserons pour appliquer le SSR à notre projet est

Angular universal version 13.0.1
La dernière version de cet outil est disponible ci-dessous

https://github.com/angular/universal/releases

Angular Universal permet de générer des pages statiques via un processus appelé Server side rendering (SSR).

La procédure à suivre est détaillée sur le site officiel d'Angular.
https://angular.io/guide/universal

Nous allons utiliser une simple commande CLI

# Installation

ng add @nguniversal/express-engine

Pour rappel angular CLI utilise via la directive ng add le principe des schematics pour modifier notre code et l'adapter à la nouvelle fonctionnalité (ici le ssr).

De nombreuses opérations ont été effectuées automatiquement sur notre projet.

Si nous avions dû réaliser cette opération manuellement voici les différentes étapes que nous aurions dû suivre.

Installation des nouvelles dépendances nécessaires
Modification du fichier main.ts
Modification du fichier app.module.ts
Modification du fichier angular.json
Création du fichier src/app/app.server.module.ts
Création du fichier src/main.server.ts
Création du fichier server.ts
Création du fichier tsconfig.server.json
Modification du fichier angular.json
Modification du fichier package.json
Installation des dépendances.

# Installer les nouvelles dépendances dans package.json

npm install --save @angular/platform-server
npm install --save @nguniversal/express-engine
npm install --save express
npm install --save @nguniversal/builders
npm install --save @types/express
src/main.ts
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
enableProdMode();
}

function bootstrap() {
platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error(err));
};

if (document.readyState === 'complete') {
bootstrap();
} else {
document.addEventListener('DOMContentLoaded', bootstrap);
}

Modification du fichier app.module.ts
Dans ce tutoriel nous allons rajouter la valeur appId pour identifier l'application.

Dans notre cas angular-starter.

src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
declarations: [
AppComponent,
HomeComponent,
NotFoundComponent,
],
imports: [
BrowserModule.withServerTransition({ appId: 'angular-starter' }),
AppRoutingModule,
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
Modification du fichier angular.json.
Modification de outputPath

dist/angular-starter/browser à la place de dist/angular-starter.
angular.json
"builder": "@angular-devkit/build-angular:browser",
"options": {
"outputPath": "dist/angular-starter/browser",
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
Création du fichier app.server.module.ts

src/app/app.server.module.ts
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
imports: [
AppModule,
ServerModule,
],
bootstrap: [AppComponent],
})
export class AppServerModule {}
Création du fichier main.server.ts

src/main.server.ts
/************************************************\*\*\*************************************************

- Initialize the server environment - for example, adding DOM built-in types to the global scope.
-
- NOTE:
- This import must come before any imports (direct or transitive) that rely on DOM built-ins being
- available, such as `@angular/elements`.
  \*/
  import '@angular/platform-server/init';

import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';

if (environment.production) {
enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
export { renderModule } from '@angular/platform-server';
Création du fichier server.ts

Le port utilisé par défaut est 4000 nous pouvons le changer si nécessaire dans ce fichier.

server.ts
import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import \* as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
const server = express();
const distFolder = join(process.cwd(), 'dist/angular-starter/browser');
const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
server.engine('html', ngExpressEngine({
bootstrap: AppServerModule,
}));

server.set('view engine', 'html');
server.set('views', distFolder);

// Example Express Rest API endpoints
// server.get('/api/\*_', (req, res) => { });
// Serve static files from /browser
server.get('_.\*', express.static(distFolder, {
maxAge: '1y'
}));

// All regular routes use the Universal engine
server.get('\*', (req, res) => {
res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
});

return server;
}

function run(): void {
const port = process.env['PORT'] || 4000;

// Start up the Node server
const server = app();
server.listen(port, () => {
console.log(`Node Express server listening on http://localhost:${port}`);
});
}

// Webpack will replace 'require' with '**webpack_require**'
// '**non_webpack_require**' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const **non_webpack_require**: NodeRequire;
const mainModule = **non_webpack_require**.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === \_\_filename || moduleFilename.includes('iisnode')) {
run();
}

export \* from './src/main.server';
Création du fichier

tsconfig.server.json
tsconfig.server.json
/_ To learn more about this file see: https://angular.io/config/tsconfig. _/
{
"extends": "./tsconfig.app.json",
"compilerOptions": {
"outDir": "./out-tsc/server",
"target": "es2019",
"types": [
"node"
]
},
"files": [
"src/main.server.ts",
"server.ts"
],
"angularCompilerOptions": {
"entryModule": "./src/app/app.server.module#AppServerModule"
}
}
Modifications du fichier angular.json

Les propriétés "server", "serve-ssr" et "prerender" sont rajoutées après la propriété test.

angular.json
"server": {
"builder": "@angular-devkit/build-angular:server",
"options": {
"outputPath": "dist/angular-starter/server",
"main": "server.ts",
"tsConfig": "tsconfig.server.json"
},
"configurations": {
"production": {
"outputHashing": "media",
"fileReplacements": [
{
"replace": "src/environments/environment.ts",
"with": "src/environments/environment.prod.ts"
}
]
},
"development": {
"optimization": false,
"sourceMap": true,
"extractLicenses": false
}
},
"defaultConfiguration": "production"
},
"serve-ssr": {
"builder": "@nguniversal/builders:ssr-dev-server",
"configurations": {
"development": {
"browserTarget": "angular-starter:build:development",
"serverTarget": "angular-starter:server:development"
},
"production": {
"browserTarget": "angular-starter:build:production",
"serverTarget": "angular-starter:server:production"
}
},
"defaultConfiguration": "development"
},
"prerender": {
"builder": "@nguniversal/builders:prerender",
"options": {
"routes": [
"/"
]
},
"configurations": {
"production": {
"browserTarget": "angular-starter:build:production",
"serverTarget": "angular-starter:server:production"
},
"development": {
"browserTarget": "angular-starter:build:development",
"serverTarget": "angular-starter:server:development"
}
},
"defaultConfiguration": "production"
}
}
Modification du fichier package.json

package.json
"scripts": {
...
"dev:ssr": "ng run angular-starter:serve-ssr",
"serve:ssr": "node dist/angular-starter/server/main.js",
"build:ssr": "ng build && ng run angular-starter:server",
"prerender": "ng run angular-starter:prerender"
...
}
