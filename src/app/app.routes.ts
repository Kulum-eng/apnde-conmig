import { Routes } from '@angular/router';
import { ReglasComponent } from './component/reglas/reglas.component';
import { HomeComponent } from './component/home/home.component';


export const routes: Routes = [
    { path: '', component: HomeComponent}, 
    { path: 'Reglas', component: ReglasComponent }
];
