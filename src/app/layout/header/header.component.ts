import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() toggleNavigation = new EventEmitter();

  toggleNav() {
    this.toggleNavigation.emit();
  }
}
