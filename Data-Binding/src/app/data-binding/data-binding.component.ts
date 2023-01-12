import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  url: string = 'http://loiane.com';
  urlImage: string =
    'https://i.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY';
  cursoAngular: boolean = true;
  constructor() {}
  getValor() {
    return 1;
  }
  getCurtirCurso() {
    return true;
  }
  valorInicial: number = 15;
  nomeDoCurso: string = 'Angular';

  onMudouValor(evento: any){
    console.log(evento.novoValor);
  }
}
