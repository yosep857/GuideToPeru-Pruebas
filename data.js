module.exports = function () {
  var data = {
    Usuarios: [
      {
        id: 0,
        email: "AnaGonz@gmail.com",
        contrasenia: "*********",
        telefono: "928457131"
      }
    ],
    Destinos: [
      {
        id: 1,
        nombre: "Destino 1",
        ubicacion: "historia... 1",
        descripcion: "descripcion ... 1",
        imagen: "imagen ... 1",
        distrito: "distrito ... 1",
        departarmento: "departarmento ... 1"
      },
      {
        id: 2,
        nombre: "Destino 2",
        ubicacion: "historia... 2",
        descripcion: "descripcion ... 2",
        imagen: "imagen ... 2",
        distrito: "distrito ... 2",
        departarmento: "departarmento ... 2"
      },
      {
        id: 3,
        nombre: "Destino 3",
        ubicacion: "historia... 3",
        descripcion: "descripcion ... 3",
        imagen: "imagen ... 3",
        distrito: "distrito ... 3",
        departarmento: "departarmento ... 3"
      }
    ],

    Negocio: [
      {
        id: 1,
        nameNegocio: "Fast Market",
        direccionNegocio: "Av Jose Galvez #1345",
        tipoNegocio: "1",
        IDusuario: "0",
        calificacion:"1"
      },
      {
        id: 2,
        nameNegocio: "Tiendas Mass",
        direccionNegocio: "Av Nicolas Ayllon #1534",
        tipoNegocio: "2",
        IDusuario: "0",
        calificacion:"1"
      },
      {
        id: 3,
        nameNegocio: "La Union",
        direccionNegocio: "Av Ricardo Palma #4365",
        tipoNegocio: "3",
        IDusuario: "0",
        calificacion:"1"
      },
      {
        id: 4,
        nameNegocio: "Papas King",
        direccionNegocio: "Av Primavera #1143",
        tipoNegocio: "3",
        IDusuario: "0",
        calificacion:"1"
      },
      {
        id: 5,
        nameNegocio: "Toro Mata",
        direccionNegocio: "Av Tomas Valle #4314",
        tipoNegocio: "1",
        IDusuario: "0",
        calificacion:"1"
      },
    ],

    clientes: [
      {
        id: 1,
        nameCliente: "Ana",
        apellidoCliente: "Gonzalez",
        anioNacimiento: "1999-10-10",
        direccion: "Urb Bello Horizonte Lt. Ll",
        IDUsuario:"0",
        cuentaBancaria: "100200300",
      },
      {
        id: 2,
        nameCliente: "Luis",
        apellidoCliente: "Garcia",
        anioNacimiento: "2004-11-04",
        direccion: "Calle La Marina N. 145",
        IDUsuario:"0",
        cuentaBancaria: "111222333",
      },
      {
        id: 3,
        nameCliente: "Sofia",
        apellidoCliente: "Fernandez",
        anioNacimiento: "2000-04-14",
        direccion: "Avn Las Brizas N. 221 ",
        IDUsuario:"0",
        cuentaBancaria: "123123123",
      },
      {
        id: 4,
        nameCliente: "Juan",
        apellidoCliente: "Rodriguez",
        anioNacimiento: "2001-01-10",
        direccion: "Urb Crepitar Lt. 43",
        IDUsuario:"0",
        cuentaBancaria: "333222111",
      },
      {
        id: 5,
        nameCliente: "Javier",
        apellidoCliente: "Torres",
        anioNacimiento: "2000-06-23",
        direccion: "Avn Nahida N. 110",
        IDUsuario:"0",
        cuentaBancaria: "321321321",
      }
    ],
    Compras: [
      {
        id:1,
        cantidad: "1",
        precio_total: "$2.00",
        descripcion:"Compra de un producto x",
        fecha:"2022-06-24",
        Cliente_ID:"0",
        Negocio_ID:"0",
      },
      {
        id:2,
        cantidad: "3",
        precio_total: "$6.00",
        descripcion:"Compra de un producto x",
        fecha:"2022-09-10",
        Cliente_ID:"0",
        Negocio_ID:"0",
      },
      {
        id:3,
        cantidad: "7",
        precio_total: "$14.00",
        descripcion:"Compra de un producto x",
        fecha:"2022-08-23",
        Cliente_ID:"0",
        Negocio_ID:"0",
      },
      {
        id:4,
        cantidad: "9",
        precio_total: "$18.00",
        descripcion:"Compra de un producto x",
        fecha:"2022-10-27",
        Cliente_ID:"0",
        Negocio_ID:"0",
      },
      {
        id:5,
        cantidad: "12",
        precio_total: "$24.00",
        descripcion:"Compra de un producto x",
        fecha:"2022-06-12",
        Cliente_ID:"0",
        Negocio_ID:"0",
      },

    ],
    TipoNegocio:[
      {
        idTipoNegocio:1,
        nombre:"Comida Rapida",
        descripcion:"Ventas de comida rapida "
      },
      {
        idTipoNegocio:2,
        nombre:"Cafeteria",
        descripcion:"Cafe de distintas variedades para el disgusto del publico"
      },
      {
        idTipoNegocio:3,
        nombre:"Restaurant",
        descripcion:"Venta de comidad variadas"
      },
      {
        idTipoNegocio:4,
        nombre:"Abarrotes",
        descripcion:"Ventas de productos de primera necesidad"
      },
      {
        idTipoNegocio:5,
        nombre:"Shopper",
        descripcion:"Ventas de servicios....."
      },

    ],
    ComentarioProducto:[
      {
        idComentarioProducto:1,
        comentario:"En opinion a la tienda x",
        calificacion:"excelente",
        producto:"..............",
        cliente:"............", 
        
      },
      {
        idComentarioProducto:2,
        comentario:"En opinion a la tienda x",
        calificacion:"buena",
        producto:"..............",
        cliente:"............", 
        
      },
      {
        idComentarioProducto:3,
        comentario:"En opinion a la tienda x",
        calificacion:"Regular",
        producto:"..............",
        cliente:"............", 
        
      },
      {
        idComentarioProducto:4,
        comentario:"En opinion a la tienda x",
        calificacion:"buena",
        producto:"..............",
        cliente:"............", 
        
      },
      {
        idComentarioProducto:5,
        comentario:"En opinion a la tienda x",
        calificacion:"regular",
        producto:"..............",
        cliente:"............", 
        
      },
    ],
    ComentarioNegocio:[
      {
        idComentarioNegocio:1,
        comentario:"recomendado",
        calificacion:"buena",
        negocio:"...............",
        cliente:"........",
      },
      {
        idComentarioNegocio:2,
        comentario:"recomendado",
        calificacion:"buena",
        negocio:"...............",
        cliente:"........",
      },
      {
        idComentarioNegocio:3,
        comentario:"recomendado",
        calificacion:"buena",
        negocio:"...............",
        cliente:"........",
      },
      {
        idComentarioNegocio:4,
        comentario:"recomendado",
        calificacion:"buena",
        negocio:"...............",
        cliente:"........",
      },
      {
        idComentarioNegocio:5,
        comentario:"recomendado",
        calificacion:"buena",
        negocio:"...............",
        cliente:"........",
      },      
    ],
    Etiqueta:[
      {
        idEtiqueta:1,
        nombreEtiqueta:"etiqueta",
      },
      {
        idEtiqueta:2,
        nombreEtiqueta:"etiqueta.......x",
      },
      {
        idEtiqueta:3,
        nombreEtiqueta:"etiqueta.....x",
      },
      {
        idEtiqueta:4,
        nombreEtiqueta:"etiqueta.....x",
      },
      {
        idEtiqueta:5,
        nombreEtiqueta:"etiqueta.......x",
      },
    ],
    EtiquetaProducto:[
      {
        idEtiquetaProducto:1,
        producto:"...........",
        etiqueta:"...........",
      },
      {
        idEtiquetaProducto:2,
        producto:"...........",
        etiqueta:"...........",
      },
      {
        idEtiquetaProducto:3,
        producto:"...........",
        etiqueta:"...........",
      },
      {
        idEtiquetaProducto:4,
        producto:"...........",
        etiqueta:"...........",
      },
      {
        idEtiquetaProducto:5,
        producto:"...........",
        etiqueta:"...........",
      },
    ],
    producto:[
      {
        idProducto:1,
        imagen:"logo",
        nombre:"leche",
        descripcion:"leche evaporada",
        precio:5,
        visible:"verdadero",
        calificacion:2,
        idNegocio:"1",
        cantidad:3,
      },
      {
        idProducto:2,
        imagen:"logo",
        nombre:"fideos",
        descripcion:"spaguetti",
        precio:6,
        visible:"verdadero",
        calificacion:4,
        idNegocio:"2",
        cantidad:2,
      },
      {
        idProducto:3,
        imagen:"logo",
        nombre:"mantequilla",
        descripcion:"buena calidad",
        precio:5,
        visible:"verdadero",
        calificacion:4,
        idNegocio:"3",
        cantidad:4,
      },
      {
        idProducto:4,
        imagen:"logo",
        nombre:"galletas",
        descripcion:"bañadas en chocolate",
        precio:4,
        visible:"verdadero",
        calificacion:2,
        idNegocio:"4",
        cantidad:1,
      },
      {
        idProducto:5,
        imagen:"logo",
        nombre:"yogurt",
        descripcion:"las mejores frutas existentes",
        precio:7,
        visible:"verdadero",
        calificacion:2,
        idNegocio:"5",
        cantidad:2,
      },      
    ],
  }
  return data
}
