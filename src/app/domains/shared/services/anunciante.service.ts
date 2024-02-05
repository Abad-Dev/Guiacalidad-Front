import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Anunciante } from '../models/anunciante.model';
import { RelSubAnunciante } from '../models/relsubanunciante.model';

@Injectable({
  providedIn: 'root'
})
export class AnuncianteService {
  http = inject(HttpClient);
  apiUrl = 'http://127.0.0.1:8000';

  anunciantes = signal<Anunciante[]>([]);
  relSubAnunciantes = signal<RelSubAnunciante[]>([]);

  constructor() { 
    this.getAllAnunciantes()
    .subscribe((anunciantes) => {
      this.anunciantes.set(anunciantes);
    })

    this.getRelSubAnunciantes()
    .subscribe((relSubAnunciantes) => {
      this.relSubAnunciantes.set(relSubAnunciantes);
    })
  }

  getAllAnunciantes() {
    return this.http.get<Anunciante[]>(this.apiUrl+'/anunciante');
  }

  getAnuncianteById(id: number | undefined) {
    if (!id) {
      return null;
    }
    
    return this.anunciantes().find(anunciante => anunciante.ID == id);
  }
  
  getRelSubAnunciantes() {
    return this.http.get<RelSubAnunciante[]>(this.apiUrl+'/rel-sub-anunciantes');
  }


  getAnunciantesBySubRubroId(id: number | undefined)  {
    if (!id) {
      return null;
    }

    const anunciantes : Anunciante[] = [];
    for (let rel of this.relSubAnunciantes()) {
      if (rel.FK_SUB_RUBRO == id) {
        anunciantes.push(this.getAnuncianteById(rel.FK_ANUNCIANTE)!);
      }
    }
    
    return anunciantes;
  }
}
