import { Component } from '@angular/core';

// 1. IMPORTACIÓN CORRECTA de los módulos de enrutamiento
// Se importan directamente desde '@angular/router'
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  
  // 2. IMPORTS CORREGIDOS en el decorador
  // Necesitas estos tres para que el menú y las rutas funcionen.
  imports: [
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  // 3. SE ELIMINA LA LÓGICA DE LA LISTA
  // Toda la lógica (el signal 'lista', 'agregarItem', 'eliminarItem', etc.)
  // NO pertenece a este componente. Debe estar en 'inicio.component.ts'.
  // Este componente ahora es solo un "contenedor" o "marco" para la aplicación.
}