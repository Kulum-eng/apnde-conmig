import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [],
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  ngOnInit(): void {
    this.playYouTubeBackground();
    this.playLocalVideo();
  }

  playYouTubeBackground(): void {
    const youtubeFrame = document.getElementById('youtube-background') as HTMLIFrameElement;
    if (youtubeFrame) {
      youtubeFrame.src = "https://www.youtube.com/embed/9n68FwzecBM?autoplay=1&mute=0&loop=1&playlist=9n68FwzecBM";
    }
  }

  playLocalVideo(): void {
    const video = document.getElementById('background-video') as HTMLVideoElement;
    if (video) {
      video.play().catch(error => {
        console.error("Error al reproducir el video automáticamente:", error);
      });
    }
  }
}
