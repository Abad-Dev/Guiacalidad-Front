import { Component, Input, inject, signal } from '@angular/core';
import { RubroService } from '../../../shared/services/rubro.service';
import { SubRubro } from '../../../shared/models/subrubro.model';

@Component({
  selector: 'app-subrubro',
  standalone: true,
  imports: [],
  templateUrl: './subrubro.component.html',
  styleUrl: './subrubro.component.css'
})
export class SubrubroComponent {
  @Input({ required: true }) id?: number;
  rubroService = inject(RubroService);

  subrubro = signal<SubRubro | null>(null);

  ngOnInit() {
    this.rubroService.getSubRubroById(this.id!)
      .subscribe((subrubro) => {
        this.subrubro.set(subrubro);
      });
  }

}
