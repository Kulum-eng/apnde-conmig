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
  gameStarted: boolean = false;
  gameWon: boolean = false;
  showAlert: boolean = true;
  introText: string = '';
  fullIntroText: string = 'Bienvenidos a suma, aquí aprenderás a divertirte mientras aprendes a sumar. Te aparecerá la suma y deberás seleccionar en la rana la respuesta correcta. ¡Venga, da clic para empezar!';
  introAudio!: HTMLAudioElement;
  audio!: HTMLAudioElement;
  victoryAudio!: HTMLAudioElement;  

  private typingInterval: any;

  ngOnInit() {
    this.playIntroAudio();
    setTimeout(() => {
      this.typeIntroText();
    }, 2000); 
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
    if (this.victoryAudio) {
      this.victoryAudio.pause();
      this.victoryAudio.currentTime = 0;
    }
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  playIntroAudio() {
    this.introAudio = new Audio('assets/sumas.mp3');
    this.introAudio.play();
  }

  typeIntroText() {
    let index = 0;
    this.typingInterval = setInterval(() => {
      if (index < this.fullIntroText.length) {
        this.introText += this.fullIntroText[index];
        index++;
      } else {
        clearInterval(this.typingInterval);
      }
    }, 50); 
  }

  startGame() {
    this.showAlert = false;
    this.gameStarted = true;

    if (this.introAudio) {
      this.introAudio.pause();
      this.introAudio.currentTime = 0;
    }

    this.playBackgroundMusic();
    this.generateProblem();
    this.generateRanas();
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
      audio.src = rana.isCorrect ? 'assets/correcto.mp3' : 'assets/mala.mp3';
      audio.play();

      if (rana.isCorrect) {
        this.showVictoryAlert();
      }
    }
  }

  showVictoryAlert() {
    alert('¡Felicidades, has ganado!');
    this.victoryAudio = new Audio('assets/ganador.mp3');
    this.victoryAudio.play();
  }

  resetGame() {
    this.gameWon = false;
    this.gameStarted = false;
    this.showAlert = true;
    this.ranas = []; 
    this.introText = ''; 
  }
}
