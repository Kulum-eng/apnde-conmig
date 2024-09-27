import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReglasComponent } from './component/reglas/reglas.component';

const routes: Routes = [
  { path: 'reglas', component: ReglasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
