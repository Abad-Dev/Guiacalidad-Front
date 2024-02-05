import { Component} from '@angular/core';
import { AnuncianteComponent } from '../../../anunciantes/components/anunciante/anunciante.component';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLinkWithHref, AnuncianteComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
}
