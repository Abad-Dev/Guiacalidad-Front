import { Component, Input } from '@angular/core';
import { Anunciante } from '../../../shared/models/anunciante.model';

@Component({
  selector: 'anunciante-component',
  standalone: true,
  imports: [],
  templateUrl: './anunciante.component.html',
  styleUrl: './anunciante.component.css'
})
export class AnuncianteComponent {
  @Input() anunciante: Anunciante | null = null;
}
