import { AlunosService } from './service/alunos.service';
import { FormsModule } from '@angular/forms';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';

@NgModule({
  declarations: [AlunosComponent, AlunosDetalheComponent],
  imports: [CommonModule, FormsModule, AlunosRoutingModule],
  providers: [AlunosService]
})
export class AlunosModule {}
