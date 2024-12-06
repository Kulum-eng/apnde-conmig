import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar estos módulos
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]), 
    password: new FormControl('', [Validators.required])  
  });

  constructor(private router: Router) {}

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value); 
    }
  }

  navigateToRegister(): void {
    this.router.navigate(['/registrarse']);
  }
}
