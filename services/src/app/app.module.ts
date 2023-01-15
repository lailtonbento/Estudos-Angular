import { LogService } from './shared/log.service';
import { CursosService } from './cursos/cursos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CriarCursosComponent } from './criar-cursos/criar-cursos.component';

@NgModule({
  declarations: [AppComponent, CursosComponent, CriarCursosComponent],
  imports: [BrowserModule],
  providers: [CursosService, LogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
