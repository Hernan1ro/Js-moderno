function saludar(nombre) {
  // console.log(arguments);
  console.log("hola " + nombre);
  return 1;
}

const retornoDeSaludar = saludar("Hernan", 20, true, "costa rica");
console.log(retornoDeSaludar);

// const saludar2 = function (nombre) {
//   console.log("Hola " + nombre);
// };

// const saludarFlecha = (name) => {
//   console.log("hola " + name);
// };

// saludar("Hernan", 40, true, "costa rica");
// saludar2("Hernan");
// saludarFlecha("nigga");

function suma(a, b) {
  return a + b;
}

// mult = (a, b) => {
//   return a * b;
// };
mult = (a, b) => a * b;
console.log(suma(5, 4));
console.log(mult(5, 4));

function getAleatorio() {
  return Math.random();
}

getAleatorio2 = () => Math.random();

console.log(getAleatorio2());
