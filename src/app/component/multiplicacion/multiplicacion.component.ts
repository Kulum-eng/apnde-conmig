import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multiplicacion',
  standalone: true,
  templateUrl: './multiplicacion.component.html',
  styleUrls: ['./multiplicacion.component.css'],
  imports: [FormsModule, CommonModule],
})
export class MultiplicacionComponent {
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  customMapping = {
    1: 7,
    2: 6,
    3: 5,
    4: 4,
    5: 3,
    6: 2,
    7: 1,
    8: 8,
  };
  segmentColors: string[] = ['#f4a261', '#e76f51', '#2a9d8f', '#264653'];
  private rotation = 0;
  private spinInterval: any;

  firstNumber: number | null = null;
  secondNumber: number | null = null;

  isEditing: boolean = false;
  isIncorrect: boolean = false;
  isCorrect: boolean = false;
  resultInput: string = '?';
  userResult: string = '';

  startSpinning(): void {
    const speed = 50 + Math.random() * 50;
    this.spinInterval = setInterval(() => {
      this.rotation += 10;
      const wheel = document.getElementById('wheel')!;
      wheel.style.transform = `rotate(${this.rotation}deg)`;
    }, speed);

    setTimeout(() => {
      clearInterval(this.spinInterval);
      this.rotation = this.rotation % 360;
      this.selectNumberFromWheel();
    }, 3000);
  }

  private selectNumberFromWheel(): void {
    const segmentIndex = Math.floor((this.rotation % 360) / 45);
    const number = this.numbers[segmentIndex];
    const mappedNumber = this.customMapping[number as keyof typeof this.customMapping];

    if (!this.firstNumber) {
      this.firstNumber = mappedNumber;
    } else if (!this.secondNumber) {
      this.secondNumber = mappedNumber;
    }
  }

  enableEditing(): void {
    this.isEditing = true;
    this.resultInput = this.userResult || '';
  }

  disableEditing(): void {
    if (!this.userResult) {
      this.resultInput = '?';
    }
    this.isEditing = false;
  }

  verifyResult(): void {
    const correctResult = (this.firstNumber || 0) * (this.secondNumber || 0);
    if (parseInt(this.userResult, 10) === correctResult) {
      this.isIncorrect = false;
      this.isCorrect = true;
      this.playCorrectAudio();
    } else {
      this.isCorrect = false;
      this.isIncorrect = true;
      this.playIncorrectAudio();
    }
  }

  reset(): void {
    this.firstNumber = null;
    this.secondNumber = null;
    this.resultInput = '?';
    this.userResult = '';
    this.isIncorrect = false;
    this.isCorrect = false;
    this.rotation = 0;

    const wheel = document.getElementById('wheel')!;
    wheel.style.transform = 'rotate(0deg)';
  }

  private playIncorrectAudio(): void {
    const audio = document.getElementById('incorrect-audio') as HTMLAudioElement;
    if (audio) {
      audio.play();
    }
  }

  private playCorrectAudio(): void {
    const audio = document.getElementById('correct-audio') as HTMLAudioElement;
    if (audio) {
      audio.play();
    }
  }
}
