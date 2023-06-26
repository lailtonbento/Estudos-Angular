import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  alunos: any[] = [{ id: 1, nome: 'Lailton', email: 'lb1@gmail.com' }];
  constructor() {}

  getAlunos() {
    return this.alunos;
  }

  getAlunoId(id: number) {
    for (let i = 0; i < this.alunos.length; i++) {
      let aluno = this.alunos[i];
      if (aluno.id) {
        return aluno;
      }
    }
    return null;
  }
}
