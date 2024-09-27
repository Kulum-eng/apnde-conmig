import { Routes } from '@angular/router';
import { ReglasComponent } from './component/reglas/reglas.component';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }, 
    { path: 'reglas', component: ReglasComponent }, 
];
