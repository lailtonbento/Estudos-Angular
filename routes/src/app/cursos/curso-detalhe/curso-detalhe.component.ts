import { CursosService } from '../service/cursos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css'],
})
export class CursoDetalheComponent implements OnInit {
  curso: any;
  inscricao!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService
  ) {}
  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      let id = params['id'];
      this.curso = this.cursosService.getCursoId(id);
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
