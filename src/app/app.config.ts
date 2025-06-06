// para usar-activar rutas definidas en routes ts

import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';

// constante que contiene lista de rutas
export const appConfig = {
  providers: [provideRouter(appRoutes)],
};
