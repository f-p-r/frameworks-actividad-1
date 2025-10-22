import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Libro } from '../../services/libros';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-card-libro',
  standalone: true,
  imports: [CurrencyPipe],
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
