Cette application contient aussi la gestion des Child routes.

Cette question est évoquée dans la documentation
https://angular.io/guide/router#child-route-configuration

De façon pratique deux composants sont rajoutés dans Contact

mailing + map

6 fichiers seront notamment modifiés pour en prendre compte :

- contact.component.html
- contact-routing.module.ts
- mailing-routing.module.ts
- map-routing.module.ts
- contact.component.spec.ts
- app.module.ts

# Rajout des composants et module mailing

ng generate module modules/general/contact/mailing --routing --module=app
ng generate component modules/general/contact/mailing --module=app

<!-- ng generate module modules/contact/mailing --routing --module=app
ng generate component modules/contact/mailing --module=app -->

# Rajout des composants et module map

ng generate module modules/general/contact/map --routing --module=app
ng generate component modules/general/contact/map --module=app

<!-- ng generate module modules/contact/map --routing --module=app
ng generate component modules/contact/map --module=app -->

1. src/app/modules/general/contact/contact.component.html

<div class="row">
  <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
    <p>contact works!</p>
    <ul>
      <li><a routerLink="/contact/mailing">Mailing</a></li>
      <li><a routerLink="/contact/map">Map</a></li>
    </ul>
  </div>
  <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
    <router-outlet></router-outlet>
  </div>
</div>

2. src/app/modules/general/contact/contact-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';

const routes: Routes = [
{
path: '', component: ContactComponent, children: [
{
path: '',
loadChildren: () => import(`./mailing/mailing.module`)
.then(m => m.MailingModule)
},
{
path: 'mailing',
loadChildren: () => import(`./mailing/mailing.module`)
.then(m => m.MailingModule)
},
{
path: 'map',
loadChildren: () => import(`./map/map.module`)
.then(m => m.MapModule)
},
{
path: '\*\*',
loadChildren: () => import(`./mailing/mailing.module`)
.then(m => m.MailingModule)
},

    ]

},
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ContactRoutingModule { }

3. src/app/modules/general/contact/mailing/mailing-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailingComponent } from './mailing.component';

const routes: Routes = [
{ path: '', component: MailingComponent, children: [] }
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class MailingRoutingModule { }

4. src/app/modules/general/contact/map/map-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map.component';

const routes: Routes = [
{ path: '', component: MapComponent, children: [] }
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class MapRoutingModule { }

5. src/app/modules/general/contact/contact.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
let component: ContactComponent;
let fixture: ComponentFixture<ContactComponent>;

beforeEach(async () => {
await TestBed.configureTestingModule({
imports: [
RouterTestingModule
],
declarations: [ContactComponent]
}).compileComponents();
});

beforeEach(() => {
fixture = TestBed.createComponent(ContactComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});

it('should create', () => {
expect(component).toBeTruthy();
});
});

6. src/app/app.module.ts

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
BrowserModule,
AppRoutingModule,
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
