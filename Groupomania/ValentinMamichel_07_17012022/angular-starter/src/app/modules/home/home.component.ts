import { Component, OnInit } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  features: any;
  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.features = [
      {
        name: 'Items',
        description: 'Items',
        icon: 'fab fa-bootstrap',
        link: 'httpclient',
      },
    ];
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      let navMain = document.getElementById('navbarCollapse');
      if (navMain) {
        navMain.onclick = function () {
          if (navMain) {
            navMain.classList.remove('show');
          }
        };
      }
    }
  }
}
