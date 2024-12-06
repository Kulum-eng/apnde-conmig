import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [ReactiveFormsModule], 
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {
  registrarseForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    birthdate: new FormControl('', [Validators.required])
  });

  constructor(private router: Router) {}

  onSubmit() {
    if (this.registrarseForm.valid) {
      console.log(this.registrarseForm.value);
    }
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}
