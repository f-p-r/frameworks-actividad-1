import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MiCompra } from '../mi-compra/mi-compra';

@Component({
  selector: 'app-barra-utilidades',
  standalone: true,
  imports: [CommonModule, FormsModule, MiCompra],
  templateUrl: './barra-utilidades.html',
  styleUrl: './barra-utilidades.css'
})
export class BarraUtilidades {
  @Output() buscar = new EventEmitter<string>();
  @ViewChild(MiCompra) miCompra!: MiCompra;

  termino = '';

  // Ejecuta la búsqueda
  onBuscar() {
    this.buscar.emit(this.termino);
  }

  // Abre el modal de búsqueda avanzada (todavía sin implementar)
  abrirBusquedaAvanzada() {
    console.log('Abrir modal de búsqueda avanzada');
  }

  // Abre el modal real de Mi Compra
  abrirMiCompra() {
    if (this.miCompra) {
      this.miCompra.abrir();
    }
  }
}
