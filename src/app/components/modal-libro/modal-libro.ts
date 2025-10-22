import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Libro } from '../../services/libros';
import { CompraService } from '../../services/compra';

@Component({
  selector: 'app-modal-libro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-libro.html',
  styleUrl: './modal-libro.css'
})
export class ModalLibro {
  @Input() libro: Libro | null = null;
  @Output() cerrar = new EventEmitter<void>(); // 🔹 el padre sabrá cuándo cerrar
  pestana: 'sinopsis' | 'resenas' = 'sinopsis';

  constructor(private compraService: CompraService) {}

  agregarALaCesta() {
    if (this.libro) {
      this.compraService.agregarLibro(this.libro);
      alert(`Se ha añadido "${this.libro.titulo}" a la cesta.`);
    }
  }

  onCerrar() {
    this.cerrar.emit(); // 🔹 avisa al padre
  }
}

