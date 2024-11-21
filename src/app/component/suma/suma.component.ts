import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-suma',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css'],
})
export class SumaComponent implements OnInit {
  appleRows: { redApples: string[]; greenApples: string[] }[] = [];
  answers: number[] = []; 
  readonly maxPerGroup = 6; 
  readonly totalRows = 7; 

  ngOnInit(): void {
    this.generateAppleGrid();
  }

  generateAppleGrid(): void {
    this.appleRows = [];

    for (let i = 0; i < this.totalRows; i++) {
      const redCount = Math.floor(Math.random() * this.maxPerGroup) + 1; 
      const greenCount = Math.floor(Math.random() * this.maxPerGroup) + 1; 

      const redApples = Array(redCount).fill('assets/manzana_roja.png');
      const greenApples = Array(greenCount).fill('assets/manzana_verde.png');

      this.appleRows.push({ redApples, greenApples });
      this.answers.push(0); 
    }
  }
}
