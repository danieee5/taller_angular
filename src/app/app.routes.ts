import { Routes } from '@angular/router'; // importar rutas de home y partidos
// se navega entre esas dos, solo se imoprtan esas
import { HomeComponent } from './componentes/home/home.component';
import { PartidosComponent } from './componentes/partidos/partidos.component';

//cuando vaya a la direccion URL como / o poartidos, mostrar ese componente
//solo lo que apaece en el eouter outlet

export const appRoutes: Routes = [ //nombre de mi constante, ese nombre usar
  { path: 'home', component: HomeComponent }, 
  { path: 'partidos', component: PartidosComponent } //lo que el usaurio escribe, el componente que se muestra
];