import { Negocio } from "./negocio";
import { Cliente } from "./clientes";

export class ComentarioNegocio {

    idComentarioNegocio: number = 0;
    comentario: String = "";
    calificacion: String = "";
    negocio: Negocio = new Negocio;
    cliente: Cliente = new Cliente;

}