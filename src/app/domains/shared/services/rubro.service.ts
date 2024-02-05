import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Rubro } from '../models/rubro.model';
import { SubRubro } from '../models/subrubro.model';

@Injectable({
  providedIn: 'root'
})
export class RubroService {
  http = inject(HttpClient);
  apiUrl = 'http://127.0.0.1:8000';

  rubros = signal<Rubro[]>([]);
  subrubros = signal<SubRubro[]>([]);

  constructor() {
  this.getAllRubros()
    .subscribe((Rubros) => {
      this.rubros.set(Rubros);
    })

  this.getAllSubRubros()
    .subscribe((SubRubros) => {
      this.subrubros.set(SubRubros);
  })}

  getAllRubros() {
    return this.http.get<Rubro[]>(this.apiUrl+'/rubro');
  }

  getAllSubRubros() {
    return this.http.get<SubRubro[]>(this.apiUrl+'/sub-rubro');
  }

  getRubroById(id: number | undefined) {
    if (!id){
      return null;
    }
    return this.rubros().find(rubro => rubro.ID == id);
  }
  
  getSubRubroById(id: number | undefined) {
    if (!id){
      return null;
    }
    return this.subrubros().find(subrubro => subrubro.ID == id);
  }

  getRubroNameById(id: number | undefined){
    return this.rubros().find((rubro) => rubro.ID == id)?.NAME
  }

}
