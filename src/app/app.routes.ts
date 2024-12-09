import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { AjustesComponent } from './pages/ajustes/ajustes.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { AvatarComponent } from './pages/avatar/avatar.component';
import { NotificacionesComponent } from './pages/notificaciones/notificaciones.component';
import { MusicaComponent } from './pages/musica/musica.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { OperacionesComponent } from './pages/operaciones/operaciones.component';
import { RestaComponent } from './pages/resta/resta.component';
import { MultiplicacionComponent } from './pages/multiplicacion/multiplicacion.component';
import { DivisionComponent } from './pages/division/division.component';
import { SumaComponent } from './pages/suma/suma.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';

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
  
  { path: 'login', component: LoginComponent },
  
  { path: 'registrarse', component: RegistrarseComponent }
];
