import { Component, Input, computed, inject, signal } from '@angular/core';
import { RubroService } from '../../../shared/services/rubro.service';
import { SubRubro } from '../../../shared/models/subrubro.model';
import { RubrostableComponent } from '../../../shared/components/rubrostable/rubrostable.component';
import { AnuncianteService } from '../../../shared/services/anunciante.service';
import { AnuncianteComponent } from '../../../anunciantes/components/anunciante/anunciante.component';
import { Anunciante } from '../../../shared/models/anunciante.model';
import { RouterLinkWithHref } from '@angular/router';
import { Rubro } from '../../../shared/models/rubro.model';
import { ReclamosComponent } from '../../../shared/components/reclamos/reclamos.component';

@Component({
  selector: 'app-subrubro',
  standalone: true,
  imports: [RubrostableComponent, AnuncianteComponent, RouterLinkWithHref, ReclamosComponent],
  templateUrl: './subrubro.component.html',
  styleUrl: './subrubro.component.css'
})
export class SubrubroComponent {
  @Input({ required: true }) id?: number;
  anuncianteService = inject(AnuncianteService);
  rubroService = inject(RubroService);

  subrubro = computed<SubRubro>(() => {
    const subrubros = this.rubroService.subrubros();
    const id = this.id;

    return this.rubroService.getSubRubroById(id)!;
  })
  
  rubro = computed<Rubro | undefined>(() => {
    const subrubro = this.subrubro();
    const rubros = this.rubroService.rubros();
    if (subrubro == undefined){
      return undefined
    }
    
    return this.rubroService.getRubroById(subrubro.RUBRO_ID)!;
  })

  anunciantes = computed<Anunciante[]>(() => {
    const anunciantes = this.anuncianteService.anunciantes();
    const rels = this.anuncianteService.relSubAnunciantes();

    return this.anuncianteService.getAnunciantesBySubRubroId(this.id)!;
  })
}
