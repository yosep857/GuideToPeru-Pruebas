import { Usuario } from "./usuario"

export class Cliente {
    id: number = 0
    nameCliente: string = ""
    apellidoCliente: string = ""
    anioNacimiento: Date = new Date(Date.now())
    direccion: string = ""
    idusuario: Usuario=new Usuario
    cuentaBancaria: string = ""

}