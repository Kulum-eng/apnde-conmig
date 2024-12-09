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

  isIncorrect: boolean = false;
  isCorrect: boolean = false;
  userResult: string = '';

  private spinAudio = new Audio('assets/giro-rulet.mp3'); 

  startSpinning(): void {
    if (this.firstNumber && this.secondNumber) {
      alert('Reinicia para girar de nuevo.');
      return;
    }

    const speed = 50 + Math.random() * 50; 
    const totalSpins = 360 * 5;

    this.spinAudio.loop = true;
    this.spinAudio.play();

    this.spinInterval = setInterval(() => {
      this.rotation += 10;
      const wheel = document.getElementById('wheel')!;
      wheel.style.transform = `rotate(${this.rotation}deg)`;
    }, speed);

    setTimeout(() => {
      clearInterval(this.spinInterval);
      this.rotation = (this.rotation + totalSpins) % 360;
      this.spinAudio.pause();
      this.spinAudio.currentTime = 0; 
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

  verifyResult(): void {
    const correctResult = (this.firstNumber ?? 0) * (this.secondNumber ?? 0);

    if (parseInt(this.userResult, 10) === correctResult) {
      this.isIncorrect = false;
      this.isCorrect = true;
      this.playAudio('assets/correcto.mp3');
    } else {
      this.isCorrect = false;
      this.isIncorrect = true;
      this.playAudio('assets/mala.mp3');
    }
  }

  reset(): void {
    this.firstNumber = null;
    this.secondNumber = null;
    this.userResult = '';
    this.isIncorrect = false;
    this.isCorrect = false;
    this.rotation = 0;

    const wheel = document.getElementById('wheel')!;
    wheel.style.transform = 'rotate(0deg)';
  }

  private playAudio(src: string): void {
    const audio = new Audio(src);
    audio.play();
  }
}
