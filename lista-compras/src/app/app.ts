import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Producto {
  nombre: string;      
  cantidad: number;    
  comprado: boolean
  categoria: string;   
}


@Component({
  selector: 'app-root',
  standalone: true,                
  imports: [CommonModule],         
  templateUrl: './app.html',       
  styleUrls: ['./app.scss'],       
})
export class App {

  title = signal('TENDA ABARROTES DE HEINER');


  lista = signal<Producto[]>([
    { nombre: 'Arroz', cantidad: 2, comprado: false, categoria: 'Granos' },
    { nombre: 'Aceite', cantidad: 1, comprado: false, categoria: 'Aceites' },
    { nombre: 'Leche', cantidad: 3, comprado: false, categoria: 'Lácteos' },
    { nombre: 'Pan', cantidad: 2, comprado: false, categoria: 'Panadería' },
    { nombre: 'Huevos', cantidad: 12, comprado: false, categoria: 'Lácteos' },
    { nombre: 'Frijoles', cantidad: 1, comprado: false, categoria: 'Granos' },
    { nombre: 'Azúcar', cantidad: 1, comprado: false, categoria: 'Dulces' },
    { nombre: 'Sal', cantidad: 1, comprado: false, categoria: 'Condimentos' },
    { nombre: 'Jugo', cantidad: 3, comprado: true, categoria: 'Bebidas' },
  ]);


  agregarItem(nombre: string, cantidad: number = 1, categoria: string = '') {
    if (nombre) {
      this.lista.update((list) => [
        ...list,
        { nombre, cantidad, comprado: false, categoria },
      ]);
    }
  }


  eliminarItem(index: number) {
    this.lista.update((list) => list.filter((_, i) => i !== index));
  }


  marcarComprado(index: number) {
    this.lista.update((list) =>
      list.map((item, i) => (i === index ? { ...item, comprado: !item.comprado } : item))
    );
  }

  totalItems(): number {
    return this.lista().reduce((total, prod) => total + prod.cantidad, 0);
  }
}
