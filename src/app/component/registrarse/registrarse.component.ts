import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  // Importa ReactiveFormsModule aquí

@Component({
  selector: 'app-registrarse',
  standalone: true,
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css'],
  imports: [ReactiveFormsModule]  // Agrega ReactiveFormsModule en la propiedad "imports"
})
export class RegistrarseComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Formulario enviado', this.registerForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }
}
