import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resta.component.html',
  styleUrls: ['./resta.component.css'],
})
export class RestaComponent implements OnInit, OnDestroy {
  equations: {
    minuend: number;
    subtrahend: number;
    correctAnswer: number;
    options: number[];
    selectedAnswer: number | null;
    checked: boolean;
  }[] = [];

  minutes: number = 1;
  seconds: number = 15;
  private timeInterval: any;
  timerColor: string = 'white';

  correctAudio = new Audio('assets/correcto.mp3');
  incorrectAudio = new Audio('assets/mala.mp3');
  monedaAudio = new Audio('assets/moneda.mp3');
  tiempoAudio = new Audio('assets/tiempo.mp3');
  tiempoPlayed: boolean = false;

  ngOnInit(): void {
    this.generateEquations();
    this.startTimer();
  }

  ngOnDestroy(): void {
    clearInterval(this.timeInterval);
  }

  generateEquations(): void {
    this.equations = [];
    for (let i = 0; i < 6; i++) {
      const minuend = Math.floor(Math.random() * 10) + 1;
      const subtrahend = Math.floor(Math.random() * minuend);
      const correctAnswer = minuend - subtrahend;

      const options = this.generateOptions(correctAnswer);
      this.equations.push({
        minuend,
        subtrahend,
        correctAnswer,
        options,
        selectedAnswer: null,
        checked: false,
      });
    }
  }

  generateOptions(correctAnswer: number): number[] {
    const options = new Set<number>();
    options.add(correctAnswer);

    while (options.size < 4) {
      const option = Math.floor(Math.random() * 10);
      options.add(option);
    }

    return Array.from(options).sort((a, b) => a - b);
  }

  checkAnswer(index: number, selectedAnswer: number): void {
    if (!this.equations[index].checked) {
      this.equations[index].selectedAnswer = selectedAnswer;

      if (selectedAnswer === this.equations[index].correctAnswer) {
        this.equations[index].checked = true;
        this.correctAudio.play();
      } else {
        this.incorrectAudio.pause();
        this.incorrectAudio.currentTime = 0;
        this.incorrectAudio.play();
      }
    }
  }

  playMonedaSound(): void {
    this.monedaAudio.pause();
    this.monedaAudio.currentTime = 0;
    this.monedaAudio.play().catch((error) => {
      console.error('Error al reproducir moneda.mp3:', error);
    });
  }

  startTimer(): void {
    this.timeInterval = setInterval(() => {
      if (this.seconds === 0) {
        if (this.minutes === 0) {
          clearInterval(this.timeInterval);
          this.tiempoAudio.pause();
          this.playEndSounds();
        } else {
          this.minutes--;
          this.seconds = 59;
        }
      } else {
        this.seconds--;
      }

      if (this.minutes === 0 && this.seconds <= 59 && !this.tiempoPlayed) {
        this.timerColor = 'red';
        this.tiempoPlayed = true;
        this.tiempoAudio.loop = true;
        this.tiempoAudio.pause();
        this.tiempoAudio.currentTime = 0;
        this.tiempoAudio
          .play()
          .catch((error) => console.error('Error al reproducir tiempo.mp3:', error));
      }
    }, 1000);
  }

  playEndSounds(): void {
    this.incorrectAudio.pause();
    this.incorrectAudio.currentTime = 0;
    this.incorrectAudio
      .play()
      .then(() => {
        this.incorrectAudio.onended = () => {
          const perdisteAudio = new Audio('assets/perdiste.mp3');
          perdisteAudio.play().catch((error) =>
            console.error('Error al reproducir perdiste.mp3:', error)
          );
        };
      })
      .catch((error) => console.error('Error al reproducir mala.mp3:', error));
  }
}
