//Superclass

function Persona(nombre,edad) {
    this.nombre = nombre;
    this.edad = edad;
    
    Persona.prototype.saludar = function() {    
        console.log(`Hola soy ${nombre} y tengo ${edad}`)
    }
} 



//Subclase

function Empleado(sueldo,nombre,edad) {
    this.sueldo = sueldo
    /**
     * Composición
     * SuperClass.{apply|}
     */
    //Persona() acá que el this es window {}
    //new Persona() acá el this es un nuebo obj {}

    //Persona.call(this,nombre,edad)
    Persona.apply(this[nombre,edad])
    Empleado.prototype.trabajar = function() {
        console.log(`Ble ${sueldo}`)
    }
}


//Herencia
//Subclass.prototype = Object.create(Superclass.prototype)
Empleado.prototype = Object.create(Persona.prototype)
Empleado.prototype.constructor = Empleado

let juan = new Empleado("juan", 30)