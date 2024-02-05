import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Anunciante } from '../models/anunciante.model';

@Injectable({
  providedIn: 'root'
})
export class AnuncianteService {
  http = inject(HttpClient);
  apiUrl = 'http://127.0.0.1:8000';

  anunciantes = signal<Anunciante[]>([]);

  constructor() { 
    this.getAllAnunciantes()
    .subscribe((anunciantes) => {
      this.anunciantes.set(anunciantes);
    })
  }

  getAllAnunciantes() {
    return this.http.get<Anunciante[]>(this.apiUrl+'/anunciante');
  }
}
