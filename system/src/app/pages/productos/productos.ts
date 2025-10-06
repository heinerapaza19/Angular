import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Producto {
  nombre: string;
  cantidad: number;
  categoria: string;
  precio: number;
}

@Component({
  selector: 'app-productos-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrls: ['./productos.scss']
})
export class Productos {

  // Lista inicial de productos existentes
  lista = signal<Producto[]>([
    { nombre: 'Aceite Primor', cantidad: 12, categoria: 'Abarrotes', precio: 8.5 },
    { nombre: 'Arroz Costeño 1kg', cantidad: 20, categoria: 'Granos', precio: 5.2 },
    { nombre: 'Leche Gloria 400ml', cantidad: 18, categoria: 'Lácteos', precio: 4.8 }
  ]);

  // Agregar nuevo producto
  agregarProducto(nombre: string, cantidad: number, categoria: string, precio: number) {
    if (!nombre.trim() || cantidad < 0 || precio < 0) return;
    this.lista.update(lista => [
      ...lista,
      { nombre, cantidad, categoria, precio }
    ]);
  }

  // Eliminar producto
  eliminarProducto(index: number) {
    this.lista.update(lista => lista.filter((_, i) => i !== index));
  }
}
