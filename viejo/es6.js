//function Persona(){}
//es una función, porque tiene propiedad prototype y además que su prototipo tiene 
//todas las propiedades de funciones

class Persona { 
      constructor(nombre,edad)  {
          this.nombre = nombre
          this.edad = edad
      }   
    saludo() {
        //SIEMPRE bindear, no usar arrow fn
    }
}

class Empleado extends Persona {
    constructor(sueldo,nombre,edad){
        super(nombre,edad)
        this.sueldo = sueldo
    }
    trabajar() {
        
    }
}