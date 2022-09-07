// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  class Usuario{
    constructor(usuario, nombre, mail, password){
      this.usuario = usuario;
      this.nombre = nombre;
      this.mail = mail;
      this.password = password
    }
  }

  Usuario.prototype.saludar = function(){
    return 'Hola mi nombre es ' + this.nombre
  }

  let marcos = new Usuario('marcosf82', 'Marcos', 'marcos@gmail.com', 1234)
  let juan = new Usuario('Juan15', 'Juan', 'juan@gmail.com', 4568749)

  console.log(marcos.saludar())
  console.log(juan.saludar())

}
crearUsuario()

function agregarMetodoPrototype(constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  class bienvendio{
    constructor(saludar){
      this.saludar = 'Hello World!'
    }
  }

  function saludo(){
    return this.saludar
  }

  const saludo1 = new bienvendio(saludo)

}
agregarMetodoPrototype()

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  function darVuelta(inver){
      this.inver = inver;
  }

  let mar = new darVuelta('marcos');

  darVuelta.prototype.hola = function(){
      return 'hola ' + this.inver;
  }
  
  console.log(mar.hola())
}
agregarStringInvertida()

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

    class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      // Crea el constructor:
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
      this.detalle = `Mi nombre es ${this.nombre} ${this.apellido}, tengo ${this.edad} años y vivo en ${this.domicilio}`
    }
  }
  const marcos = new Persona ('Marcos', 'Fernandez', 28, 'Neuquen')
  const martina = new Persona ('Martina', 'Perez', 20, 'Chile')
  const agus = new Persona ('Agustina', 'Zanata', 18, 'Tucuman')
    
  console.log(marcos.detalle)
  console.log(martina.detalle)
  console.log(agus.detalle)



function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  class Persona{
    constructor(nombre, apellido, edad, dir){
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.dir = dir;
    }
  }

  const marcos = new Persona ('Juan', 'Perez', 22, 'Saavedra 123')

  console.log(marcos)
}
crearInstanciaPersona()
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      // Crea el constructor:
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
      this.datos = `Mi nombre es ${this.nombre} y tengo ${this.edad} años`
    }
  }
  const juan = new Persona ('Juan', 22)
    
  console.log(juan.datos)
}
agregarMetodo()
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
