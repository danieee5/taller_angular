import { Injectable } from '@angular/core'; //este servicio se puede inyectar en otros lugares

//para concetarme a una URL, neceito modulo HttpClient para hacerle peticiones
import { HttpClient } from '@angular/common/http';

// peticiones en internet suelen tardar
import { Observable } from 'rxjs'; //maneja cosas que toman tiempo y todavia no llegan, las llama luego y le digo de que forma (con la interfaz)
import { Partido } from '../modelo/partido'; //importar interfaz que va a leer par que sepa com deben verse

@Injectable({
  providedIn: 'root' //esta disponible para tooda la app
})

//definir todo lo que puede hacer el servicio
export class PartidosService {
  private apiUrl = 'https://raw.githubusercontent.com/vjuradov/ejemploDatosConsumo/refs/heads/main/datos.json';

//constructor(private nombre: Tipo {}
  constructor(private http: HttpClient) { } //inyectar http cliente automaticamente

  getPartidos(): Observable<Partido[]> { //devolvera una lista de partidos que llegara en un futuro
    return this.http.get<Partido[]>(this.apiUrl) //aqui uso httpCliente para GET del link
    //lo que venga tendra forma de Partido[]
  }

}
