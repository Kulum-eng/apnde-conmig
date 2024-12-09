import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceusersService } from '../service/serviceusers.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  error: string | null = null;

  constructor(private router: Router, private userService: ServiceusersService) {}

  onSubmit() {
    if (this.loginForm.valid) {
      this.error = null;
  
      const { email, password } = this.loginForm.value;
  
      if (email && password) {
        this.userService.loginUser(email, password).subscribe(
          (response) => {
            localStorage.setItem('token', response.token);
            localStorage.setItem('username', response.user.username);
            this.router.navigate(['/bienvenida']);
          },
          (error) => {
            if (error.status === 401) {
              this.error = 'Credenciales inválidas. Por favor, verifica tu información.';
            } else {
              this.error = 'Ocurrió un error. Intenta nuevamente más tarde.';
            }
          }
        );
      } else {
        this.error = 'El email y la contraseña son obligatorios';
      }
    }
  }

  navigateToRegister(): void {
    this.router.navigate(['/registrarse']);
  }
}
