import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CromocuentoComponent } from './component/cromocuento/cromocuento.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { ComentariosComponent } from './component/comentarios/comentarios.component';
import { ContactoComponent } from './component/contacto/contacto.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'Cromocuento', component: CromocuentoComponent},
    {path: 'Formulario', component: FormularioComponent},
    {path: 'Comentarios', component: ComentariosComponent},
    {path: 'Contacto', component: ContactoComponent}

];
