import { Negocio } from "./negocio";


export class Producto {

    idProducto: number = 0;
    imagen: String = "";
    nombre: String = "";
    descripcion: String = "";
    precio: number = 0;
    visible: boolean = true;
    calificacion: number = 0;
    idNegocio: Negocio = new Negocio;
    cantidad: number = 0;
}