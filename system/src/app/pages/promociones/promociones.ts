import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// 🧩 Interfaz que define la estructura de los productos
interface Producto {
  nombre: string;
  categoria: string;
  cantidad: number;
  oferta: boolean;
}

@Component({
  selector: 'app-promocionar', 
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promociones.html', 
  styleUrls: ['./promociones.scss']    
})
export class Promocionar {

  // 📦 Lista de productos con indicador de oferta
  lista = signal<Producto[]>([
    { nombre: 'Arroz', categoria: 'Granos', cantidad: 20, oferta: false },
    { nombre: 'Aceite', categoria: 'Aceites', cantidad: 15, oferta: true },
    { nombre: 'Leche', categoria: 'Lácteos', cantidad: 10, oferta: false },
  ]);

  // ➕ Agrega un nuevo producto a la lista
  agregarProducto(nombre: string, categoria: string, cantidad: number) {
    if (nombre && categoria && cantidad > 0) {
      this.lista.update((productos) => [
        ...productos,
        { nombre, categoria, cantidad, oferta: false }
      ]);
    }
  }

  // 🔥 Activa la promoción de un producto
  activarOferta(index: number) {
    this.lista.update((productos) =>
      productos.map((p, i) => i === index ? { ...p, oferta: true } : p)
    );
  }

  // 🚫 Quita la promoción de un producto
  quitarOferta(index: number) {
    this.lista.update((productos) =>
      productos.map((p, i) => i === index ? { ...p, oferta: false } : p)
    );
  }

  // 📊 Devuelve el número total de productos en oferta
  totalOfertas(): number {
    return this.lista().filter(p => p.oferta).length;
  }
}
