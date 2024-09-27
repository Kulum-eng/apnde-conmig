import { Component } from '@angular/core';
import { CareComponent } from '../component/care/care.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dash-card',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, CareComponent],
  templateUrl: './dash-card.component.html',
  styleUrl: './dash-card.component.css'
})
export class DashCardComponent {

}
