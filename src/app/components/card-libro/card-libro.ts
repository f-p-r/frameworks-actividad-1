import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Libro } from '../../services/libros';
import { PrecioEuroPipe } from '../../pipes/precio-euro-pipe';

@Component({
  selector: 'app-card-libro',
  standalone: true,
  imports: [PrecioEuroPipe],
  templateUrl: './card-libro.html',
  styleUrl: './card-libro.css'
})
export class CardLibro {
  @Input() libro!: Libro;
  @Output() verDetalle = new EventEmitter<Libro>();

  abrirDetalle() {
    this.verDetalle.emit(this.libro);
  }
}
