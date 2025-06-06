import { Component, OnInit } from '@angular/core'; //on init: cuando se cargue, trae los datos
import { PartidosService } from '../../servicios/partidos.service'; 
import { Partido } from '../../modelo/partido'; //importar interfaz
// '..' subir una carpeta sucesivamente
 

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})

export class PartidosComponent implements OnInit {
  partidosLista: Partido[] = []; //variable para guardar datos que rcibo desde el servicio

  constructor(private partidosService: PartidosService) {} //inyeccion del servicio en el componente, le da acceso para poder usar su metodo en el cmopontente

  ngOnInit(): void { //ngOnInit metodo de angular que se ejecuta cuando el cmponente se carga
    this.partidosService.getPartidos().subscribe((data) => { //tu, espra a la data
      this.partidosLista = data; //toma los datos guardados y los meto en mi lista
      console.log(this.partidosLista); // opcional: para ver si llegaron bien los datos
    });
  }
}

//void no devuelve nada (suma ni resultados), solo trae datos

//this.partidosService.getPartidos().subscribe((data)
//accedo al servicio con this, llamo al metodo del servicio, como todavia no tengo los datos uso observavle con subscribe que subscribe escucha los datos y los gurada cuando llega en la lista local



// "Cuando aparezco (ngOnInit()), uso un servicio (partidosService) para pedir una lista de partidos (getPartidos()), y como eso tarda un poquito (Observable), espero hasta que llegue (subscribe). Cuando llegan (data), los guardo en mi lista local (this.partidos) y los muestro en pantalla."