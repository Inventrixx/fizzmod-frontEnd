//SuperClass

function Persona(nombre,edad){
    //Atributos de configuración de propiedades de objetos
    //value - writable - configurable - enumerable
    //Object.defineProperty()
    //Object.defineProperties()
    //Object.create()
    //Object.defineProperties(this, "nombre")
    let n = nombre
    //this.nombre = nombre;
    this.edad = edad
    this.saludar = function() {
        console.log(`Hola soy ${n}`)
    }
   /*  Persona.prototype.saludar = function() {
        console.log(`Hola soy ${nombre}`)
    } */
    //return this
}


//Instancia.__proto___ = Class.prototype
let juan = new Persona("juan", 30)
let ana = new Persona("ana", 30)