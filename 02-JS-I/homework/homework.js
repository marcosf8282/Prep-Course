// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'programacion';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 82;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === true;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString() {
  // "Return" la string provista: str
  // Tu código:
  let str = 'Henry';
  return str;
}
devolverString()

function suma() {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  let x = 2;
  let y = 2;
  return (x + y);
}
suma()

function resta() {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  let x = 18;
  let y = 18;
  return (x - y) ;
}
resta()

function multiplica() {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  let x = 11;
  let y = 2;
  return (x * y);
}
multiplica()

function divide() {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  let x = 70;
  let y = 70;
  return x / y;
}
divide()

function sonIguales() {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  let x = 20;
  let y = 20;
  if(x === y){
    return false;
  }else{
    return true;
  }
}
sonIguales()

function tienenMismaLongitud() {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  let str1 = 'patagonia';
  let str2 = 'montañas';

  const string1 = str1.length;
  const string2 = str2.length;

  if(string1 === string2){
    return false
  }else{
    return true
  }    
}
tienenMismaLongitud()

function menosQueNoventa() {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  let num = 82;
  if(num < 90){
    return false
  }else{
    return true
  }
}
menosQueNoventa()

function mayorQueCincuenta() {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  let num = 95;
  if(num > 50){
    return false
  }else{
    return true
  }
}
mayorQueCincuenta()

function obtenerResto() {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  let x = 50;
  let y = 10;
  const resto = (x % y == 0)
  
  return resto
}
obtenerResto()

function esPar() {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  let num = 89;
  if(num % 2 == 0){
    return false
  }else{
    return true
  }
}
esPar()

function esImpar() {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  let num = 9;
  if(num % 2 == 0){
    return false
  }else{
    return true
  }
}
esImpar()

function elevarAlCuadrado() {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  let num = 6;
  return num * num;
}
elevarAlCuadrado()

function elevarAlCubo() {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  let num = 3;
  return num * num * num;
}
elevarAlCubo()

function elevar() {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  let num = 2;
  let exponent = 2;
  const res = Math.pow(num, exponent);
  return res 
}
elevar()

function redondearNumero() {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  let num = 5.60;
  const res = Math.round(num);
  return res
}
redondearNumero()

function redondearHaciaArriba() {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  let num = 5.55;
  const res = Math.fround(num);
  return (res)
}
redondearHaciaArriba()

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  const num = Math.random();
  return (num)
}
numeroRandom()

function esPositivo() {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  let numero = 0;
  if(numero > 0){
    return ('Es positivo')
  }if(numero < 0){
    return ('Es negativo')
  }if(numero == 0){
    return false
  }
}
esPositivo()

function agregarSimboloExclamacion() {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  let string = 'hello world';
  const resultado = (string + '!');
  return (resultado)
}
agregarSimboloExclamacion()

function combinarNombres() {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  let nombre = 'hello';
  let apellido = ' world';
  return (nombre + apellido);
}
combinarNombres()

function obtenerSaludo() {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  const nombre = 'Martin!';
  const respuesta = ('Hola ' + nombre);
  return respuesta
}
obtenerSaludo()

function obtenerAreaRectangulo() {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  let alto = 2;
  let ancho = 2;
  return alto * ancho;
}
obtenerAreaRectangulo()

function retornarPerimetro(){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  let cmLadoA = 2;
  // como es un rectangulo sus 4 lados son son iguales
  const resultado = (cmLadoA * 4);
  return resultado
}
retornarPerimetro()


function areaDelTriangulo(){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  let base = 5;
  let altura = 5;
  const area = (base * altura)
  return area
}
areaDelTriangulo()


function deEuroAdolar(){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  let euro = 1;
  let dolar = 1.20
  let cantEuro = 100;
  const respuesta = (cantEuro * dolar)
  return respuesta
}
deEuroAdolar()


function esVocal(){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  let letra = 'a';
  if(letra.length == 1 && isNaN(letra) && letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
    return ('Es vocal')
  }else{
    return ('Dato incorrecto')
  }
}
esVocal()



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
