Utilisation de l'interpolation sur Home.

src/app/modules/general/home/home.component.html

<div class="container py-5">
  <div class="row">
    <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 text-center mb-2">
      <h1 class="h5">
        <i class="fas fa-laptop fa-lg me-2 text-primary"></i>
        {{ name }}
        <i class="fas fa-mobile-alt fa-lg ms-2 text-primary"></i>
      </h1>
    </div>
    <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3 text-center text-danger mb-2">
      <h2 class="h5">
        {{ angular }}<i class="fab fa-angular fa-lg ms-2"></i>
      </h2>
    </div>
    <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3 text-center text-primary mb-2">
      <h2 class="h5">
        {{ bootstrap }}<i class="fab fa-bootstrap fa-lg ms-2"></i>
      </h2>
    </div>
    <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3 text-center text-success mb-2">
      <h2 class="h5">
        {{ fontawesome }}<i class="fab fa-font-awesome-flag fa-lg ms-2"></i>
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
    <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-2" *ngFor="let feature of features">
      <div class="nga-card bg-light mb-3">
        <a routerLink="/{{ feature.link }}">
          <div class="card-header">
            <div class="row">
              <div class="col-10 col-xl-10">
                <h5 class="card-title">{{ feature.name }}</h5>
              </div>
              <div class="col-2 col-xl-2">
                <i class="{{ feature.icon }} fa-lg text-primary"></i>
              </div>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text">{{ feature.description }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
src/app/modules/general/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

name = environment.application.name;
angular = environment.application.angular;
bootstrap = environment.application.bootstrap;
fontawesome = environment.application.fontawesome;

features: any;
constructor(
@Inject(PLATFORM_ID) private platformId: object) {
this.features =
[
{
name: 'Bootstrap',
description: 'How to use Buttons, Alerts, Pagination, Tables, Collapses',
icon: 'fab fa-bootstrap',
link: 'bootstrap'
},
{
name: 'Components',
description: 'Channel component with Input, Output and Event Emitter',
icon: 'far fa-clone',
link: 'components'
},
{
name: 'Services',
description: 'Use services to view a playlist and a youtube player',
icon: 'fas fa-handshake',
link: 'services'
},
{
name: 'Reactive Forms',
description: 'A model-driven approach to handling form inputs',
icon: 'far fa-file-alt',
link: 'forms'
},
{
name: 'Template Driven',
description: 'Forms are the mainstay of business applications',
icon: 'far fa-file-alt',
link: 'forms'
},
];

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
src/app/modules/general/home/home.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
let component: HomeComponent;
let fixture: ComponentFixture<HomeComponent>;

beforeEach(async () => {
await TestBed.configureTestingModule({
imports: [
RouterTestingModule
],
declarations: [ HomeComponent ]
})
.compileComponents();
});

beforeEach(() => {
fixture = TestBed.createComponent(HomeComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});

it('should create', () => {
expect(component).toBeTruthy();
});
});
src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
{ path: '', component: HomeComponent, },
{
path: 'forms',
loadChildren: () => import('./modules/application/example-forms/tutorial.module')
.then(mod => mod.TutorialModule)
},
{
path: 'components',
loadChildren: () => import('./modules/application/example-components/tutorial.module')
.then(mod => mod.TutorialModule)
},
{
path: 'services',
loadChildren: () => import('./modules/application/example-services/tutorial.module')
.then(mod => mod.TutorialModule)
},
{
path: 'bootstrap',
loadChildren: () => import('./modules/application/example-bootstrap/tutorial.module')
.then(mod => mod.TutorialModule)
},
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
