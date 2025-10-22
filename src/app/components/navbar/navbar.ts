import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { PreguntasFrecuentes } from '../preguntas-frecuentes/preguntas-frecuentes';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  imports: [PreguntasFrecuentes]
})
export class Navbar {
  @Output() cambiarCategoria = new EventEmitter<'novedades' | 'masVendidos'>();
  @ViewChild(PreguntasFrecuentes) preguntas!: PreguntasFrecuentes;
  enlaceActivo = 'inicio';

  activar(categoria: 'inicio' | 'novedades' | 'masVendidos' | 'faq' | 'cuenta') {
    this.enlaceActivo = categoria;

    if (categoria === 'novedades' || categoria === 'masVendidos') {
      this.cambiarCategoria.emit(categoria);
    }
  }

  abrirPreguntasFrecuentes() {
    this.preguntas.abrir();
  }
}
