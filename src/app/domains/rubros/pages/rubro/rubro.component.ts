import { Component, Input, computed, inject } from '@angular/core';
import { RubroService } from '../../../shared/services/rubro.service';
import { Rubro } from '../../../shared/models/rubro.model';
import { SubRubro } from '../../../shared/models/subrubro.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-rubro',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './rubro.component.html',
  styleUrl: './rubro.component.css'
})
export class RubroComponent {
  @Input({ required: true }) id?: number;

  
  rubroService = inject(RubroService);

  rubro = computed<Rubro | undefined>(() => {
    const id = this.id;
    const rubros = this.rubroService.rubros();

    if (id == undefined){
      return undefined
    }
    
    return this.rubroService.getRubroById(id)!;
  })

  subrubros = computed<SubRubro[]>(() => {
    const rubros = this.rubroService.rubros();
    const subrubros = this.rubroService.subrubros();
    
    return this.rubroService.getSubRubrosByRubroId(this.id)!;
  })
}
