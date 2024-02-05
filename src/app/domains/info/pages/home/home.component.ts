import { Component, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnuncianteService } from '../../../shared/services/anunciante.service';
import { RubroService } from '../../../shared/services/rubro.service';
import { RubrostableComponent } from '../../../shared/components/rubrostable/rubrostable.component';
import { Anunciante } from '../../../shared/models/anunciante.model';
import { SubRubro } from '../../../shared/models/subrubro.model';
import { AnuncianteComponent } from '../../../anunciantes/components/anunciante/anunciante.component';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLinkWithHref, AnuncianteComponent, RubrostableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  anuncianteService = inject(AnuncianteService);
  rubroService = inject(RubroService);

  anunciantes = this.anuncianteService.anunciantes;
  rubros = this.rubroService.rubros;
  subrubros = this.rubroService.subrubros;
  
  insearch = signal<boolean>(false);

  anunciantesResult = signal<Anunciante[]>([]);
  subrubrosResult = signal<SubRubro[]>([]);

  searchCtrl = new FormControl('',{
    nonNullable: true,
    validators: [
        Validators.required,
        Validators.pattern('^\\S.*$'),
        Validators.minLength(3),
    ]
  });

  handleSearch() {
    if (!this.insearch()) { // Si es la primera búsqueda
      this.insearch.set(true);
    }

    this.anunciantesResult.set(
      this.anunciantes().filter((anunciante) => {
        if (anunciante.NAME.toUpperCase().includes((this.searchCtrl.value).toUpperCase()))
          return anunciante
        return
      })
    )

    this.subrubrosResult.set(
      this.subrubros().filter((subrubro) => {
        if (subrubro.NAME.toUpperCase().includes((this.searchCtrl.value).toUpperCase()))
          return subrubro
        return
      })
    )
  }
}
