import { Component, ViewEncapsulation, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnuncianteService } from '../../../shared/services/anunciante.service';
import { RubroService } from '../../../shared/services/rubro.service';
import { AnuncianteComponent } from '../../../anunciantes/components/anunciante/anunciante.component';
import { RubrostableComponent } from '../../../shared/components/rubrostable/rubrostable.component';
import { ReclamosComponent } from '../../../shared/components/reclamos/reclamos.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [AnuncianteComponent, RubrostableComponent, ReclamosComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  encapsulation: ViewEncapsulation.None
})

export class SearchComponent {

  anuncianteService = inject(AnuncianteService);
  rubroService = inject(RubroService);

  anunciantes = this.anuncianteService.anunciantes;
  rubros = this.rubroService.rubros;
  subrubros = this.rubroService.subrubros;
  search = signal<string>("");

  anunciantesBySearch = computed(() => {
    const anunciantes = this.anunciantes;
    const search = this.search;

    return anunciantes().filter(anunciante => {
      if (anunciante.NAME.toUpperCase().includes((search()).toUpperCase()))
        return anunciante
      return
      })
  })

  subrubrosBySearch = computed(() => {
    const subrubros = this.subrubros;
    const search = this.search;

    return subrubros().filter((subrubro) => {
      if (subrubro.NAME.toUpperCase().includes((search()).toUpperCase()))
        return subrubro
      return
    })
  })



  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.search.set(params['query']);
    });
  }
}
