// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  const gustos = ['Programacion', 'Mate', 'Patagonia'];
  return gustos[0]
}
devolverPrimerElemento()

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  const gustos = ['Programacion', 'Mate', 'Patagonia'];
  return gustos[2]
}
devolverUltimoElemento()


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  const gustos = ['Programacion', 'Mate', 'Patagonia'];
  return gustos.length
}
obtenerLargoDelArray()


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  const gustos = ['Programacion', 'Mate', 'Patagonia'];
  for(let i = 0; i < gustos.length; i++){
    return gustos[i]
  }
}
incrementarPorUno()


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  const gustos = ['Programacion', 'Mate', 'Patagonia'];
  gustos.push('marcos')
  return gustos
}
agregarItemAlFinalDelArray()


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}
agregarItemAlComienzoDelArray(['Programacion', 'Mate', 'Patagonia'], 'marcos')


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ')
}
dePalabrasAFrase(['Villa', 'Nieve', 'Sol'])

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if(array.includes(elemento)){
    return true
  }else{
    return false
  }
}
arrayContiene(['Villa', 'Nieve', 'Sol'], 'Sol')


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let sum = 0;

  for(let i = 0; i < numeros.length; i++){
    sum += numeros[i]
  }
  return sum
}
agregarNumeros([3, 5, 8, 2])


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma = 0;

  for(let index in resultadosTest){
    suma += resultadosTest[index]
  }
  return suma/resultadosTest.length
}
promedioResultadosTest([2, 8, 2, 5, 6, 4])


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  // var numeros = [1, 2, 500, 50]
  var max = Math.max(...numeros)
  return max
}
numeroMasGrande([2, 30, 80, 65])

function multiplicarArgumentos(arguments) {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length > 1){
    let total = 1;
    for(let i = 0; 1 < arguments.length; i++){
      total = total * arguments[i]
    };
    return total;
  }else if(arguments.length === 1){
    return arguments[0];
  }else{
    return 0;
  }
}
multiplicarArgumentos([5])

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  const result = arreglo.filter(word => word.valueOf() > 18);

  return result;
}
cuentoElementos([5, 25, 56, 82, 15])

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia === 1 || numeroDeDia === 7){
    return ('Es fin de semana')
  }else{
    return ('Es dia laboral')
  }
} 
diaDeLaSemana(4)


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  cadena = n.toString();
  if(cadena.charAt(0) === '9'){
    return true
  }else{
    return false
  }
}
empiezaConNueve(95)

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let arr = arreglo

  let pos1 = arr[0]
  let pos2 = arr[1]
  let pos3 = arr[2]

  if(pos1 === pos2 && pos1 === pos3){
    return true
  }else{
    return false
  }
};
todosIguales([1, 1, 1])


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let nuevoArray = [];
  for (let i = 0 ; i < array.length ; i++) {
    if ( array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre') {
      nuevoArray.push(array[i]);
    }else if(typeof array[i] != array){
      console.log('No se encontraron los meses pedidos')
    }
  }
  return nuevoArray;
}
mesesDelAño(['Enero','Agosto','Marzo','Octubre','Noviembre'])



function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let array1 = [];
  
  array.map(function(x) {
    if(x > 100){
      array1.push(x);
      console.log(array1)
    }
  });

}
mayorACien([0, 150, 99, 182, 65, 101])

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let array1 = [];

  for(let i = 0; i <= 10; i++){
    if(i === 2){
      console.log('Se interrumpió la ejecución')
      break;
    }
    numero = numero *2
    array1.push(numero)
    
  }
  return array1
}
breakStatement([2])

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let array = [];

  for(let i = 0; i <= 10; i++){
    if(i === 5){
      continue;
    }
    numero = numero *2
    array.push(numero)
    
  }
  return array
}
continueStatement(5)


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
