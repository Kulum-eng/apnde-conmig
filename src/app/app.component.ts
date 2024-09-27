import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { CardComponent } from './component/card/card.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { ReglasComponent } from './component/reglas/reglas.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,HeaderComponent, CardComponent, InicioComponent, HeaderComponent, ReglasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  texto = 'Universidad ';
}    