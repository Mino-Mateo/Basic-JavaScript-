/*
Tipos de datos
y muchos
*/

// String (cadena de texto)
let name = "Mateo";
let alias = "Scorpsum";
let pais = "Ecuador";
console.log(name + alias + pais);

// Números
let edad = 27; //Entero
let peso = 120.32; //Decimal
let perdida = -27; // Negativo
let sinSentido = 8 / 2; //Operaciones

console.log(edad + sinSentido);
console.log(peso);
console.log(edad + peso);

// Booleanos
let isUgly = true;
let isTrue = false;

console.log(isUgly);
console.log(isTrue);
console.log(isUgly + isTrue);
console.log(isUgly - isTrue);
console.log(isUgly * isTrue);
console.log(isUgly / isTrue);

// Undefined (No hay datos)
let sinDefinir;
console.log(sinDefinir);

// Null (Si hay datos pero este es nulo)
let esNulo = null;
console.log(esNulo);

// Simbolo???? (Valores unicos para propiedades)
let simbolo = Symbol("🤑");
console.log(simbolo);

//BigInt ?!?! (Valores muy grandes, demasiado grandes)
let elGrande =
  BigInt(
    78987894654987498416549141979824987987879981414898284628574888411654165147524162416511681
  );
let elGrande2 =
  BigInt(
    78789878946549874984165491419798249879878799814148982846285748884116541651475241624454654654581n
  );
console.log(elGrande);
console.log(elGrande2);

// Mostrar el tipo de dato
console.log(typeof pais);
console.log(typeof sinDefinir);
console.log(typeof esNulo);
console.log(typeof simbolo);
console.log(typeof elGrande);
console.log(typeof isUgly);
console.log(typeof peso);
console.log(typeof edad);
