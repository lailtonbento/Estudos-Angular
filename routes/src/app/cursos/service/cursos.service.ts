import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor() {}
  cursos: any[] = [{ id: 1, nome: 'Angular', professor: 'Loiane Groner' }];
  getCursos() {
    return this.cursos;
  }
  getCursoId(id: number) {
    for (let i = 0; i < this.cursos.length; i++) {
      let curso = this.cursos[i];
      if (curso.id) {
        return curso;
      }
    }
    return null;
  }
}
