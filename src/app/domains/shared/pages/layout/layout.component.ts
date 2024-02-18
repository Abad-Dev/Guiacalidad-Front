import { Component, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLinkActive, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { AnuncianteService } from '../../services/anunciante.service';
import { RubroService } from '../../services/rubro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  anuncianteService = inject(AnuncianteService);
  rubroService = inject(RubroService);

  navbarOpened = signal<boolean>(false);
  linksBarOpened = signal<boolean>(false);
  sidebarOpened = signal<boolean>(false);
  rubros = this.rubroService.rubros;

  searchCtrl = new FormControl('',{
    nonNullable: true,
    validators: [
        Validators.required,
        Validators.pattern('^\\S.*$'),
        Validators.minLength(3),
    ]
  });

  constructor(private router: Router) { }

  toggleLinksBar = () => {
    this.linksBarOpened.update(b => !b);
  }

  toggleNavbar = () => {
    this.navbarOpened.update(b => !b);
  }

  toggleSideMenu = () => {
    this.sidebarOpened.update(b => !b);
  }

  handleChangeRoute = () => {
    this.navbarOpened.set(false);
    this.linksBarOpened.set(false);
  }

  handleSearch = () => {
    this.router.navigate(['/search'], { queryParams: { query: this.searchCtrl.value } });
    this.searchCtrl.setValue("");
  }

}
