import { RouterModule } from '@angular/router';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

import { CursosComponent } from './cursos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosService } from './service/cursos.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CursosComponent, CursoDetalheComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [CursosService],
})
export class CursosModule {}
