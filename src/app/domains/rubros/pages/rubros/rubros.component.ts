import { Component, inject } from '@angular/core';
import { RubroService } from '../../../shared/services/rubro.service';
import { RubrostableComponent } from '../../../shared/components/rubrostable/rubrostable.component';

@Component({
  selector: 'app-rubros',
  standalone: true,
  imports: [RubrostableComponent],
  templateUrl: './rubros.component.html',
  styleUrl: './rubros.component.css'
})
export class RubrosComponent {
  rubroService = inject(RubroService);
  
  rubros = this.rubroService.rubros;
  subrubros = this.rubroService.subrubros;

  /*ngOnInit() {
    this.rubroService.getAllRubros()
      .subscribe((Rubros) => {
        this.rubros.set(Rubros);
      })

    this.rubroService.getAllSubRubros()
      .subscribe((SubRubros) => {
        this.subrubros.set(SubRubros);
      })
  }*/
}
