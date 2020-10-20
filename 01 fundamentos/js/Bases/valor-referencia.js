let a = 10;
let b = a;

a = 30;

console.log({ a, b });

let juan = { nombre: "juan" };
let ana = { ...juan };
ana.nombre = "ana";

console.log({ juan, ana });

const cambiarNombre = ({ ...persona }) => {
  persona.nombre = "tony";
  return persona;
};

let peter = { nombre: "peter" };
let tony = cambiarNombre(peter);

console.log({ peter, tony });

//ARREGLOS//

const frutas = ["banano", "pera", "manzana"];
console.time("slice");
const otrasFrutas = frutas.slice();
console.timeEnd("slice");
console.time("spread");
const otrasFrutas2 = [...frutas];
console.timeEnd("spread");

otrasFrutas.push("fresa");

console.table({ frutas, otrasFrutas });
