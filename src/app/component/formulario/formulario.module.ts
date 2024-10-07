import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { FormularioComponent } from './formulario.component';
import { InputsModule } from '../inputs/inputs.module'; 

@NgModule({
  declarations: [FormularioComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    InputsModule 
  ],
  exports: [FormularioComponent] 
})
export class FormularioModule { }
