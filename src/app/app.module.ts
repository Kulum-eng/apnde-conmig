import { BrowserModule } from '@angular/platform-browser';
import { ComentariosModule } from './component/comentarios/comentarios.module';
import { InputsModule } from './component/inputs/inputs.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    BrowserModule,
    ComentariosModule,
    InputsModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
