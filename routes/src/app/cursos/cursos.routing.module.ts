import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosNotfoundComponent } from './cursos-notfound/cursos-notfound.component';
import { CursosComponent } from './cursos.component';



const cursosRoutes: Routes = [
  { path: '', component: CursosComponent },
  { path: 'cursos/:id', component: CursoDetalheComponent },
  { path: 'naoEncontrado', component: CursosNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
