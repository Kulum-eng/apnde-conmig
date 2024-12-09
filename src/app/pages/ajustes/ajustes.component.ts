import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajustes',
  standalone: true,
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.css'],
})
export class AjustesComponent {
  soundValue = 50;
  musicValue = 50;
  notifications = true;

  private currentSlider: 'sound' | 'music' | null = null;

  constructor(private router: Router) {}

  startDrag(event: MouseEvent, slider: 'sound' | 'music') {
    this.currentSlider = slider;
    this.updateSliderValue(event);

    window.addEventListener('mousemove', this.onDrag);
    window.addEventListener('mouseup', this.stopDrag);
  }

  onDrag = (event: MouseEvent) => {
    if (this.currentSlider) {
      this.updateSliderValue(event);
    }
  };

  stopDrag = () => {
    this.currentSlider = null;
    window.removeEventListener('mousemove', this.onDrag);
    window.removeEventListener('mouseup', this.stopDrag);
  };

  updateSliderValue(event: MouseEvent) {
    const sliderWidth = window.innerWidth; 
    const newValue = Math.min(100, Math.max(0, (event.clientX / sliderWidth) * 100));

    if (this.currentSlider === 'sound') {
      this.soundValue = Math.round(newValue);
    } else if (this.currentSlider === 'music') {
      this.musicValue = Math.round(newValue);
    }
  }

  toggleNotifications(state: boolean) {
    this.notifications = state;
  }

  goBack() {
    this.router.navigate(['/inicio']);
  }
}
