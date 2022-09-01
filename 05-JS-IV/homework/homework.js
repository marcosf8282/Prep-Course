// No cambies los nombres de las funciones.

const { exists } = require("@11ty/eleventy/src/TemplatePath")

function crearGato (nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  const obj = {
    nombre: 'Marcos',
    edad: 25,
  }
  console.log(obj)

  function meow(){
      const str = {
          grito: 'Meow!'
      }
      console.log(str.grito)
  }
  meow()
}
crearGato()


function agregarPropiedad (objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:

  const obj ={
      property: property
  }
  console.log(obj)
}
agregarPropiedad('', null)


function invocarMetodo (objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  const metdo = {nombre: objeto};

  function local(){
    console.log(metdo.nombre)
  }
  local()
 
}
invocarMetodo('Marcos')

function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:  
  const num = {
    numero: objetoMisterioso,
    property: 'numeroMisterioso',
  }
  function multiplicar (){
    const suma = num.numero * 5;
    console.log(suma)
  }
  multiplicar()
}
multiplicarNumeroDesconocidoPorCinco(5)

function eliminarPropiedad (objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  const obj ={
    nombre: objeto,
    property: unaPropiedad,
  }
  function eliminar() {
    delete obj.property
    console.log(obj)
  }
  eliminar()
}
eliminarPropiedad('Marcos', 'Loco')

function nuevoUsuario (nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  const usuario = {
    name: nombre,
    correo: email,
    contraseña: password
  }
  console.log(usuario)
}
nuevoUsuario('Marcos', 'Marcosf3493@gmail.com', '123456')

function tieneEmail (usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  const user = {email: 'marcosf@gmail.com', pass: '123'}

  function mail(){
    if(user.hasOwnProperty('email')){
      console.log(true)
    }else{
      console.log(false)
    }
  }
  mail()
}
tieneEmail()

function tienePropiedad (objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  const obj = {name: objeto, property: 'Nombre', key: propiedad}

  function prop(){
    if(obj.property === obj.key){
      console.log(true)
    }else{
      console.log(false)
    }
  }
  prop()
}
tienePropiedad('Marcos', 'Apellido')

function verificarPassword (usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:
  const user = usuario['password'] = 123

  if(password === user){
    return true
  }else{
    return false
  }

}
verificarPassword('usuario', 123)


function actualizarPassword (usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:
  usuario[nuevaPassword] = nuevaPassword;
  return nuevaPassword
}
actualizarPassword('marocs', 'nuevaPassword')

function agregarAmigo (usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
  const user ={
    nombre: usuario,
    amigos: {
      nuevoAmigo
    }
  }
  console.log(user)
}
agregarAmigo('Marcos', 'Albi')

function pasarUsuarioAPremium () {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  const usuarios = [
    { usuario: 'juan', esPremium: 'esPremium'},
    { usuario: 'pepe', esPremium: 'esPremium'},
    { usuario: 'loca', esPremium: 'esPremium'},
    { usuario: 'rata', esPremium: 'esPremium'},
  ]

  usuarios.forEach((o) => o.esPremium = true);

  console.log(usuarios)
}
pasarUsuarioAPremium()

function sumarLikesDeUsuario(usuarios) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  let usuario = {
    posts: [{
      likes: 6
    }]
  };
  let suma = 0;

  for(let i = 0; i < usuario.posts.length; i++) {
    suma = suma + usuario.posts[i].likes;
  }
  return suma;
}
sumarLikesDeUsuario()

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  const product = {
    precio: 50,
    porcentajeDeDescuento: .5,
    calcularPrecioDescuento: ''
  }

  function calcular(){
    const cpd = product.precio - (product.precio * product.porcentajeDeDescuento);
    const numFinal = product['calcularPrecioDescuento'] = cpd

    console.log(numFinal)
  }
  calcular()
}
agregarMetodoCalculoDescuento()

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
}
