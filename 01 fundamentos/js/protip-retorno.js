// function crearPersona(nombre, apellido) {
//   return {
//     nombre,
//     apellido,
//   };
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona("hernando", "mercado");

console.log(persona);

function imprimeArgumentos() {
  console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...arg) => {
  // console.log(edad, arg);
  return arg;
};

// const arguamentos = imprimeArgumentos2(10, true, false, "fernandos");

// console.log({ arguamentos });

const [vivo, muerto, nombre] = imprimeArgumentos2(10, true, false, "fernando");

console.log({ vivo, muerto, nombre });

const { apellido: nuevoApellido } = crearPersona("fernando", "herrera");

console.log({ nuevoApellido });

const tony = {
  nombre: "tony stark",
  codeName: "ironman",
  vivo: false,
  edad: 40,
  trajes: ["mark I", "mark V", "Hulkbuster"],
};

// const imprimePropiedades = (personaje) => {
//   console.log(personaje.nombre);
//   console.log(personaje.codeName);
//   console.log(personaje.vivo);
//   console.log(personaje.edad);
//   console.log(personaje.trajes);
// };
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
  console.log({ nombre });
  console.log({ codeName });
  console.log({ vivo });
  console.log({ edad });
  console.log({ trajes });
};

imprimePropiedades(tony);
