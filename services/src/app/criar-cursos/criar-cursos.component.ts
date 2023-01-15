import { CursosService } from './../cursos/cursos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-cursos',
  templateUrl: './criar-cursos.component.html',
  styleUrls: ['./criar-cursos.component.css']
})
export class CriarCursosComponent {
  cursos: string[] = [];
  constructor(private cursosService: CursosService) {
    this.cursos = cursosService.getCursos();
  }

  onAddCurso(curso: string) {
    this.cursosService.addCurso(curso);
  }
}
