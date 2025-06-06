import { Jugador } from "./jugador";

export interface Partido {
    fecha: string;
    equipo_local: string;
    resultado: string;
    goles_a_favor: number;
    goles_en_contra: number;
    jugadores: Jugador[]; //cada elemento de la lista ya tiene la forma definida en jugadorOnterfaz

}


