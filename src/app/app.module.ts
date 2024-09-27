import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReglasComponent } from './component/reglas/reglas.component';
import { CardComponent } from './component/card/card.component';
import { RouterModule } from '@angular/router'; 
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ReglasComponent, 
    CardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
