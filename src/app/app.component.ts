import { Component, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  @ViewChild('sidenav') sideNav: MdSidenav;

  constructor(router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.hideSidenav();
      }
    });
  }

  toggleSidenav() {
      this.sideNav.toggle();
  }

  hideSidenav() {
    this.sideNav.close();
  }
}
