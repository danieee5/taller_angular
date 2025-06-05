import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  welcomeMessage = 'Bienvenido a Fútbol Stats';
  description = 'Esta aplicación te permite ver información actualizada sobre partidos de fútbol de diferentes ligas alrededor del mundo.';
}