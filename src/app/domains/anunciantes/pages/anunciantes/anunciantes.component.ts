import { Component, inject, signal } from '@angular/core';
import { AnuncianteService } from '../../../shared/services/anunciante.service';
import { Anunciante } from '../../../shared/models/anunciante.model';
import { AnuncianteComponent } from '../../components/anunciante/anunciante.component';

@Component({
  selector: 'app-anunciantes',
  standalone: true,
  imports: [AnuncianteComponent],
  templateUrl: './anunciantes.component.html',
  styleUrl: './anunciantes.component.css'
})
export class AnunciantesComponent {
  anuncianteService = inject(AnuncianteService);

  anunciantes = this.anuncianteService.anunciantes;
}
