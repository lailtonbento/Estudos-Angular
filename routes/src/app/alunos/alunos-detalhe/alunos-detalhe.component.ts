import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlunosService } from '../service/alunos.service';

@Component({
  selector: 'app-alunos-detalhe',
  templateUrl: './alunos-detalhe.component.html',
  styleUrls: ['./alunos-detalhe.component.css']
})
export class AlunosDetalheComponent implements OnInit, OnDestroy {

  aluno: any;
  inscricao!: Subscription;
  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ){}

  ngOnInit(){
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.aluno = this.alunosService.getAlunoId(id)
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}

