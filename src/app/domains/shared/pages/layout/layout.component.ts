import { Component, signal } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  navbarOpened = signal<boolean>(false);

  toggleNavbar = () => {
    this.navbarOpened.update(b => !b);
  }

  handleChangeRoute = () => {
    this.navbarOpened.set(false);
  }
}
