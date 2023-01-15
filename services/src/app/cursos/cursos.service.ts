import { LogService } from './../shared/log.service';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private cursos: string[] = ['Angular', 'Java', 'React.JS'];
  constructor(private logService: LogService) {
    console.log('CursosServices');
  }

  getCursos() {
    this.logService.consoleLog("Obtendo lista de cursos")
    return this.cursos;
  }
  addCurso(curso: string) {
    this.logService.consoleLog(`Criando um novo curso ${curso}`)
    this.cursos.push(curso);
  }
}
