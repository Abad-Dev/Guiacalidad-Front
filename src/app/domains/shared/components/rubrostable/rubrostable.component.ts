import { Component, Input, inject } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { SubRubro } from '../../models/subrubro.model';
import { RubroService } from '../../../shared/services/rubro.service';

@Component({
  selector: 'rubros-table',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './rubrostable.component.html',
  styleUrl: './rubrostable.component.css'
})
export class RubrostableComponent {
  @Input() subrubros: SubRubro[] = [];

  rubroService = inject(RubroService);
}
