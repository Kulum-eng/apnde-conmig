import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceusersService } from '../service/serviceusers.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css'],
})
export class RegistrarseComponent {
  registrarseForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private router: Router, private userService: ServiceusersService) {}

  onSubmit() {
    if (this.registrarseForm.valid) {
      const formData = this.registrarseForm.value;
  
      const { email, username, password } = formData;
      
      if (email && password && username) {
        this.userService.registerUser({ username, email, password }).subscribe(
          (response) => {
            Swal.fire({
              icon: 'success',
              title: '¡Registro exitoso!',
              text: 'Ahora puedes iniciar sesión.',
              confirmButtonText: 'Aceptar',
            }).then(() => {
              this.router.navigate(['/login']);
            });
          },
          (error) => {
            if (error.status === 400 && error.error.message === 'El correo ya está en uso') {
              Swal.fire({
                icon: 'error',
                title: 'Correo ya registrado',
                text: 'Este correo ya está registrado. Por favor, usa otro.',
                confirmButtonText: 'Aceptar',
              });
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Error en el registro',
                text: 'Ocurrió un error durante el registro. Intenta nuevamente.',
                confirmButtonText: 'Aceptar',
              });
            }
          }
        );
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error en el registro',
          text: 'El email y la contraseña son obligatorios.',
          confirmButtonText: 'Aceptar',
        });
      }
    }
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}
