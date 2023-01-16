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
  id!: number;
  inscricao!: Subscription;
  curso: any;
  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService
  ) {
    //this.id = route.snapshot.params['id'];
    //console.log(route)
  }
  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
    });
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
