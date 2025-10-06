// src/app/models/producto.model.ts

export interface Producto {
    id: number;           // Identificador único para cada producto
    nombre: string;
    cantidad: number;     // Podría representar el stock disponible
    categoria: string;
    precio: number;       // Precio unitario del producto
    comprado: boolean;    // Lo mantendremos, podría significar "en el carrito" o "agotado"
  }