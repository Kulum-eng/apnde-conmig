import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      inputs: this.fb.array([]),
      edad: ['', [Validators.required, Validators.min(0)]],
      fechaNacimiento: ['', Validators.required],
      genero: ['', Validators.required],
      sufre: ['', Validators.required],
      alergico: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.addInputs();
  }

  get inputsArray() {
    return this.form.get('inputs') as FormArray;
  }

  addInputs() {
    for (let i = 0; i < 12; i++) {
      this.inputsArray.push(this.fb.control(''));
    }
  }

  getLabel(index: number): string {
    switch (index) {
      case 0: return 'Nombre completo';
      case 1: return 'CURP';
      case 2: return 'Código postal';
      case 3: return 'Dirección';
      case 4: return 'Nacionalidad';
      case 5: return 'Correo electrónico';
      case 6: return 'Teléfono';
      case 7: return 'Teléfono de Casa';
      case 8: return 'Fecha de Nacimiento';
      case 9: return 'Edad';
      case 10: return 'Padece de problemas en el corazón?';
      case 11: return 'Es alérgico a algún medicamento?';
      default: return `Input ${index + 1}`;
    }
  }

  getPlaceholder(index: number): string {
    switch (index) {
      case 0: return 'Ingrese su nombre completo';
      case 1: return 'Ingrese su CURP';
      case 2: return 'Ingrese su código postal';
      case 3: return 'Ingrese su dirección';
      case 4: return 'Ingrese su nacionalidad';
      case 5: return 'Ingrese su correo electrónico';
      case 6: return 'Ingrese su teléfono';
      case 7: return 'Ingrese su teléfono de casa';
      case 8: return 'Seleccione su fecha de nacimiento';
      case 9: return 'Ingrese su edad';
      case 10: return 'Seleccione una opción'; 
      case 11: return 'Seleccione una opción'; 
      default: return `Ingrese valor para Input ${index + 1}`;
    }
  }

  //localstorage
  saveData() {
    const formData = {
      inputs: this.inputsArray.value,
      edad: this.form.get('edad')?.value,
      fechaNacimiento: this.form.get('fechaNacimiento')?.value,
      genero: this.form.get('genero')?.value,
      sufre: this.form.get('sufre')?.value,
      alergico: this.form.get('alergico')?.value
    };

    localStorage.setItem('formData', JSON.stringify(formData));
    console.log('Datos guardados:', formData);
  }
}
