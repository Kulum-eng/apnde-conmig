import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { InputsModule } from '../inputs/inputs.module';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [InputsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      inputs: this.fb.array([])
    });
    this.addInputs();
  }

  get inputsArray() {
    return this.form.get('inputs') as FormArray;
  }

  addInputs() {
    for (let i = 0; i < 5; i++) {
      this.inputsArray.push(this.fb.control(''));
    }
  }
}
