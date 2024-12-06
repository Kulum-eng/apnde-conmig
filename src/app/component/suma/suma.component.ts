import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-suma',
  standalone: true,
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css'],
  imports: [CommonModule],
})
export class SumaComponent implements OnInit, OnDestroy {
  ranas: { number: number; selected: boolean; isCorrect: boolean }[] = [];
  number1: number = 0;
  number2: number = 0;
  correctAnswer: number = 0;
  gameStarted: boolean = true;
  audio!: HTMLAudioElement;
  introAudio!: HTMLAudioElement;

  ngOnInit() {
    this.generateProblem(); 
    this.generateRanas(); 
    this.playIntroAudio(); 
  }

  ngOnDestroy() {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
    if (this.introAudio) {
      this.introAudio.pause();
      this.introAudio.currentTime = 0;
    }
  }

  playIntroAudio() {
    this.introAudio = new Audio('assets/sumas.mp3');
    this.introAudio.play();

    this.introAudio.onended = () => {
      this.playBackgroundMusic();
    };
  }

  playBackgroundMusic() {
    this.audio = new Audio('assets/sume.mp3');
    this.audio.loop = true;
    this.audio.play();
  }

  generateProblem() {
    this.number1 = Math.floor(Math.random() * 8) + 1;
    this.number2 = Math.floor(Math.random() * 8) + 1;
    this.correctAnswer = this.number1 + this.number2;
  }

  generateRanas() {
    this.ranas = [];
    let correctIndex = Math.floor(Math.random() * 8);

    for (let i = 0; i < 8; i++) {
      if (i === correctIndex) {
        this.ranas.push({
          number: this.correctAnswer,
          selected: false,
          isCorrect: true,
        });
      } else {
        let randomNum;
        do {
          randomNum = Math.floor(Math.random() * 10) + 1;
        } while (randomNum === this.correctAnswer);

        this.ranas.push({
          number: randomNum,
          selected: false,
          isCorrect: false,
        });
      }
    }
  }

  checkAnswer(rana: { number: number; selected: boolean; isCorrect: boolean }) {
    if (!rana.selected) {
      rana.selected = true;
      rana.isCorrect = rana.number === this.correctAnswer;

      const audio = new Audio();
      if (rana.isCorrect) {
        audio.src = 'assets/correcto.mp3';
      } else {
        audio.src = 'assets/mala.mp3';
      }
      audio.play();
    }
  }
}
