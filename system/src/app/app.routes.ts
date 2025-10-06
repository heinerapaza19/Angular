import { Routes } from '@angular/router';


import { Inicio} from './pages/inicio/inicio';
import { Contacto } from './pages/contacto/contacto';
import { GestionInventario } from './pages/gestion-inventario/gestion-inventario';
import { Ventas } from './pages/ventas/ventas';
import { Productos } from './pages/productos/productos';
import { Promocionar } from './pages/promociones/promociones';




export const routes: Routes = [

  { path: '', redirectTo: '/inicio', pathMatch: 'full' },

  // Rutas básicas
  { path: 'inicio', component: Inicio },
  { path: 'contacto', component: Contacto },
  { path: 'inventario', component: GestionInventario },
  { path: 'ventas', component: Ventas },
  { path: 'productos', component: Productos},
  { path: 'listas', component: Promocionar},
  
  
];