// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = [];

  for(var propiedad in objeto){
    matriz.push([propiedad,objeto[propiedad]])
  }

  return matriz
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var cantCaracteres = {};

  for (var i = 0; i < string.length; i++) {

    if(cantCaracteres.hasOwnProperty(string[i])){
      cantCaracteres[string[i]] ++;
    }else{
      cantCaracteres[string[i]] = 1;
    }

  }

  return cantCaracteres
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayus = '';
  var minus = '';

  for (var i = 0; i < s.length; i++) {
    if(s[i] !== s[i].toUpperCase()){
      minus += s[i]
    }else{
      mayus += s[i]
    }
  }

  return mayus + minus
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var palabrasSeparadas = str.split(" ");

  var fraseInvertida = [];

  for (let i = 0; i < palabrasSeparadas.length; i++) {
    fraseInvertida.push(palabrasSeparadas[i].split(" ").reverse().join(" "));
  }

  fraseInvertida = fraseInvertida.join(" ");
  return fraseInvertida
}

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var num = numero.toString();

  for (let i = 0; i < num.length/2; i++) {

    if((num[i] !== num[num.length - 1 - i])){
      return 'No es capicua'
    }
    return 'Es capicua'

  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var palabra = '';

  for (var i = 0; i < cadena.length; i++) {

    if(cadena[i] !== 'a' && cadena[i] !== 'b' && cadena[i] !== 'c'){
      palabra += cadena[i]
    }

  }

  return palabra
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  do{
    var cambios = false;

    for (var i = 0; i < arr.length - 1; i++) {

      if (arr[i].length > arr[i + 1].length) {
        var store = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = store;
        cambios = true;
      }

    }

  }while(cambios);

  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arregloVacio = [];

  for (let i = 0; i < arreglo1.length; i++) {
    var element = arreglo1[i];

    for (let j = 0; j < arreglo2.length; j++) {

      if (element === arreglo2[j]) {
        arregloVacio.push(element);
      }

    }

  }

  return arregloVacio;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

