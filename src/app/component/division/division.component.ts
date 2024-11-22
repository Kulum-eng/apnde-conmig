import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-division',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css'],
})
export class DivisionComponent {
  question: string = '';
  buttons: { value: number; isCorrect: boolean; color: string }[] = [];

  constructor() {
    this.generateDivisionProblem();
  }

  generateDivisionProblem(): void {
    const dividend = this.getRandomNumber(1, 20);
    const divisor = this.getRandomNumber(1, 20);
    const correctAnswer = dividend / divisor;

    const randomAnswers = new Set<number>();
    while (randomAnswers.size < 4) {
      const randomAnswer = this.getRandomNumber(1, 40);
      if (randomAnswer !== correctAnswer) {
        randomAnswers.add(randomAnswer);
      }
    }

    const answersArray = Array.from(randomAnswers);
    const randomIndex = this.getRandomNumber(0, answersArray.length - 1);
    answersArray.splice(randomIndex, 0, correctAnswer);

    this.buttons = answersArray.map((value) => ({
      value,
      isCorrect: value === correctAnswer,
      color: '',
    }));

    this.question = `${dividend} ÷ ${divisor} = ?`;
  }

  onButtonClick(button: { value: number; isCorrect: boolean; color: string }): void {
    button.color = button.isCorrect ? 'green' : 'red';
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
