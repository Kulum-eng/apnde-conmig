import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputsComponent } from './inputs.component';

@NgModule({
  declarations: [InputsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [InputsComponent]
})
export class InputsModule { }
