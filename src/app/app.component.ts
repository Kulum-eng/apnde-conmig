import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { CardComponent } from './component/card/card.component';
import { ReglasComponent } from './component/reglas/reglas.component';
import { HomeComponent } from './component/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    CommonModule, 
    RouterOutlet,
    HeaderComponent, 
    CardComponent, 
    HomeComponent,
    ReglasComponent 
  ],
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  texto = 'Universidad';
}
