import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { BienvenidaComponent } from './component/bienvenida/bienvenida.component';
import { AjustesComponent } from './component/ajustes/ajustes.component';
import { CarritoComponent } from './component/carrito/carrito.component';
import { AvatarComponent } from './component/avatar/avatar.component';
import { NotificacionesComponent } from './component/notificaciones/notificaciones.component';
import { MusicaComponent } from './component/musica/musica.component';
import { AyudaComponent } from './component/ayuda/ayuda.component';
import { OperacionesComponent } from './component/operaciones/operaciones.component';
import { RestaComponent } from './component/resta/resta.component';
import { MultiplicacionComponent } from './component/multiplicacion/multiplicacion.component';
import { DivisionComponent } from './component/division/division.component';
import { SumaComponent } from './component/suma/suma.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './component/login/login.component';
import { RegistrarseComponent } from './component/registrarse/registrarse.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inicio', component: InicioComponent }, 
  { path: 'bienvenida', component: BienvenidaComponent, canActivate: [AuthGuard] },
  { path: 'ajustes', component: AjustesComponent, canActivate: [AuthGuard] },
  { path: 'carrito', component: CarritoComponent, canActivate: [AuthGuard] },
  { path: 'avatar', component: AvatarComponent, canActivate: [AuthGuard] },
  { path: 'notificaciones', component: NotificacionesComponent, canActivate: [AuthGuard] },
  { path: 'musica', component: MusicaComponent, canActivate: [AuthGuard] },
  { path: 'ayuda', component: AyudaComponent, canActivate: [AuthGuard] },
  { path: 'operaciones', component: OperacionesComponent, canActivate: [AuthGuard] },
  { path: 'resta', component: RestaComponent, canActivate: [AuthGuard] },
  { path: 'multiplicacion', component: MultiplicacionComponent, canActivate: [AuthGuard] },
  { path: 'division', component: DivisionComponent, canActivate: [AuthGuard] },
  { path: 'suma', component: SumaComponent, canActivate: [AuthGuard] },
  
  // Elimina el AuthGuard de la ruta de login
  { path: 'login', component: LoginComponent },
  
  { path: 'registrarse', component: RegistrarseComponent }
];
