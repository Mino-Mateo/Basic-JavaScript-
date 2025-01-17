/* 
Variables
de varios tipos
*/

// Sin definir (ya que no está declarada)
console.log(helloTime);

// var (este es el antiguo, ya NO es recomendable usar)
var helloTime = "¿Cómo que tiempo?";
console.log(helloTime);

var helloTime = "Me disculpo la hora es 3:30 pm";
console.log(helloTime);

helloTime = "Mas bien son las 10 pm";
console.log(helloTime);

/****************************************************/
// No se puede acceder
// console.log(helloTime2);

// let (este es el más usado)
let helloTime2 = "Cuentame tu día";
console.log(helloTime2);

helloTime2 = "Cuentame tu tarde";
console.log(helloTime2);
/****************************************************/

// constantes (nunca van a cambiar como tu ex)
const helloTime3 = "Bueno y ahora";
console.log(helloTime3);

/* Esto da error ya que no se altera a una constante
helloTime3 = "EO";
console.log(helloTime3);
*/
