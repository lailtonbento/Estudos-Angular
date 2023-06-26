import { CursosService } from './service/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  cursos: any[] = [];

  constructor(private cursoService: CursosService) {}

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
  }
  getCursoId(id: number){
    for (let i = 0; i < this.cursos.length; i++) {
      let curso = this.cursos[i]
      if (curso.id) {
        return curso;
      }
    }
    return null;
  }
}
