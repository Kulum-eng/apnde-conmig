import { Routes } from '@angular/router';
import { ReglasComponent } from './component/reglas/reglas.component';
import { DashCardComponent } from './dash-card/dash-card.component';
import { MainComponent } from './component/main/main.component';

export const routes: Routes = [
    { path: '', component: MainComponent }, 
    { path: 'Reglas', component: ReglasComponent }, 
    { path :'dash', component: DashCardComponent}
];
