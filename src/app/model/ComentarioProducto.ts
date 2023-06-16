import { Cliente } from "./clientes";
import { Producto } from "./producto";


export class ComentarioProducto{

    idComentarioProducto:number=0;
    comentario: String="";
    calificacion: String = "";
    producto: Producto=new Producto;
    cliente: Cliente = new Cliente;

}
