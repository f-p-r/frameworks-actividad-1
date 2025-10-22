import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { BarraUtilidades } from './components/barra-utilidades/barra-utilidades';
import { Carousel } from './components/carousel/carousel';
import { ListaLibros } from './components/lista-libros/lista-libros';
import { Libro, LibrosService } from './services/libros';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, BarraUtilidades, Carousel, ListaLibros],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo = 'Novedades';
  libros: Libro[] = [];

  constructor(private librosService: LibrosService) {
    this.libros = this.librosService.getNovedades();
  }

  onCambiarCategoria(tipo: 'novedades' | 'masVendidos') {
    if (tipo === 'novedades') {
      this.titulo = 'Novedades';
      this.libros = this.librosService.getNovedades();
    } else {
      this.titulo = 'Más vendidos';
      this.libros = this.librosService.getMasVendidos();
    }
  }

  onBuscar(param: any) {
    if (typeof param === 'string') {
      // 🔹 Búsqueda simple
      const termino = param.trim();
      if (termino === '') {
        this.titulo = 'Novedades';
        this.libros = this.librosService.getNovedades();
      } else {
        this.titulo = `Resultados para "${termino}"`;
        this.libros = this.librosService.buscarLibros(termino);
      }
    } else if (typeof param === 'object' && param !== null) {
      // 🔹 Búsqueda avanzada
      this.titulo = 'Resultado de la búsqueda avanzada';
      this.libros = this.librosService.buscarAvanzado(param);
    }
  }
}
