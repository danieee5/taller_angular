import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

interface Match {
  id: number;
  equipoLocal: string;
  equipoVisitante: string;
  fecha: string;
  estadio: string;
  golesLocal: number;
  golesVisitante: number;
  posesionLocal: number;
  posesionVisitante: number;
  tirosLocal: number;
  tirosVisitante: number;
  tirosPuertaLocal: number;
  tirosPuertaVisitante: number;
  cornersLocal: number;
  cornersVisitante: number;
  faltasLocal: number;
  faltasVisitante: number;
}

@Component({
  selector: 'app-partidos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {
  matches: Match[] = [];
  selectedMatch: Match | null = null;
  isLoading = true;
  error = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadMatches();
  }

  loadMatches(): void {
    this.http.get<Match[]>('https://raw.githubusercontent.com/vjuradov/ejemploDatosConsumo/refs/heads/main/datos.json')
      .subscribe({
        next: (data) => {
          this.matches = data;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error cargando partidos:', err);
          this.isLoading = false;
          this.error = true;
        }
      });
  }

  selectMatch(match: Match): void {
    this.selectedMatch = match;
  }
}