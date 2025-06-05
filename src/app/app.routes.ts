import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PartidosComponent } from './partidos/partidos.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'partidos', component: PartidosComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' } // Ruta comodín 
];