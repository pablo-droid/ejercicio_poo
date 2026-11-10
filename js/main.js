//1
const alumno1 = {
    nombre: "Juan",
    calificaciones: {
        ingles: 9,
        programacion: 8,
        html: 7
    },
    media: function() {
        return (this.calificaciones.ingles + this.calificaciones.programacion + this.calificaciones.html) / 3;
    }
}

//console.log(alumno1.media());

//2
const producto1 = {
    precio: 0,
    descuento: 0,
    neto: function() {
        return (this.precio - this.descuento * this.precio / 100);
    }
}

/*
producto1.precio = parseInt(prompt("introduce el precio"));
producto1.descuento = parseInt(prompt("introduce el descuento"));
console.log(producto1.neto());
*/

//3
class Piedra {
    constructor(masa, volumen) {
        this.masa = masa;
        this.volumen = volumen;
    }

    densidad() {
        return this.masa / this.volumen;
    }
};

const oro = new Piedra(194, 10);
//console.log(oro.densidad());

//4
class Cuenta {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    ingresar = function(value) {
        this.saldo += Math.max(value, 0);
    }

    retirar = function(value) {
        let ret = Math.min(Math.max(value, 0), this.saldo);
        this.saldo -= ret;
        return ret;
    }
}

const cuenta = new Cuenta("pepe", 0);
cuenta.ingresar(1000);
cuenta.retirar(100);
//console.log(cuenta.saldo);

//5
class Ficha {
    constructor(nombre) {
        this.nombre = nombre;
        this.sesiones = [];
        this.numsesiones = 0;
    }

    anotar(value) {
        this.sesiones.push(Math.max(value, 0));
        this.numsesiones += 1;
    }

    media() {
        return this.sesiones.reduce((acc, session)=>{return acc+=session;}, 0) / this.numsesiones;
    }
};

const ficha1 = new Ficha("pepe");
ficha1.anotar(8);
ficha1.anotar(10);
ficha1.anotar(6);
//console.log(ficha1.media());

//6
class Conductor {
    constructor(nombre, licencia) {
        this.nombre = nombre;
        this.licencia = licencia;
    }
};

class Bus {
    constructor(conductor, capacidad) {
        this.capacidad = capacidad;
        this.pasajeros = 0;
        this.conductor = conductor;
    }

    subir(pasajeros) {
        this.pasajeros += Math.max(pasajeros, 0);
        this.pasajeros = Math.min(this.pasajeros, this.capacidad);
    }

    bajar(pasajeros) {
        this.pasajeros -= Math.max(pasajeros, 0);
        this.pasajeros = Math.max(this.pasajeros, 0);
    }
};

const linea1 = new Bus(new Conductor("jose", 1234), 40);
linea1.subir(25);
//console.log(linea1.pasajeros);
linea1.subir(35);
//console.log(linea1.pasajeros);
linea1.bajar(45);
//console.log(linea1.pasajeros);

//7
class Proveedor {
    constructor(nombre, email, telefono) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }
};

class Articulo {
    constructor(nombre, proveedor, precio) {
        this.nombre = nombre;
        this.proveedor = proveedor;
        this.precio = precio;
    }

    telefono() {
        return { 
            nombre: this.proveedor.nombre,
            telefono: this.proveedor.telefono,
        }
    }
};

const proveedor = new Proveedor("tecnoshop", "tcn@tecno.com", 1234567);
const monitor = new Articulo("monitor", proveedor, 200);
//console.log(monitor.telefono());

//8
class Alumno {
    constructor(nombre, matricula) {
        this.nombre = nombre;
        this.matricula = matricula;
        this.calificacion = 0;
    }

    calificar(nota) {
        this.calificacion = Math.max(Math.min(nota, 10), 0);
    }
};

const juan = new Alumno("juan", 124);
juan.calificar(5);
//console.log(juan);
const juan1 = new Alumno("juan1", 124);
const juan2 = new Alumno("juan2", 124);
const juan3 = new Alumno("juan3", 124);

//9
class Cliente {
    constructor(nombre, email, telefono) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }
};

class Factura {
    constructor(id, total, clientes) {
        this.cliente = clientes[id];
        this.estado = "Pendiente";
        this.total = total;
    }
    cobrar() {
        this.estado = "Pagada"; 
    }

    imprimir() {
        return `nombre: ${this.cliente.nombre}, email: ${this.cliente.email}, telefono: ${this.cliente.telefono}, total: ${this.total}, estado: ${this.estado}`;
    }
};

const clientes = [
    new Cliente("juan", "juan#mail.com", 3456718),
    new Cliente("marisa", "marisa@mail.com", 5556123),
    new Cliente("luis", "luis@mail.com", 2354322),
];

const factura = new Factura(0, 300, clientes);
//console.log(factura.imprimir());
factura.cobrar();
//console.log(factura.imprimir());