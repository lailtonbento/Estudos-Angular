import { CursosRoutingModule } from './cursos.routing.module';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

import { CursosComponent } from './cursos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosService } from './service/cursos.service';
import { FormsModule } from '@angular/forms';
import { CursosNotfoundComponent } from './cursos-notfound/cursos-notfound.component';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursosNotfoundComponent,
  ],
  imports: [CommonModule, FormsModule, CursosRoutingModule],
  providers: [CursosService],
})
export class CursosModule {}
