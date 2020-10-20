// const arr = [];

// console.log(arr);

// let videoJuegos = ["mario 3", "megaman"];

// let arreglo = [true, 123, "fernando", 1 + 2];

// console.log(arreglo);

let juegos = ["Zelda", "mario", "porono", "claudia"];

console.log("largo:", juegos.length);
console.log("largo:", juegos[juegos.length - 1]);

juegos.forEach((elemento, indice, arr) => {
  console.log({ elemento, indice, arr });
});

let nuevaLongitud = juegos.push("F-zero");

console.log(nuevaLongitud, juegos);

juegos.unshift("perra");

console.log({ nuevaLongitud, juegos });

let juegoBorrado = juegos.pop();

console.log({ juegoBorrado, juegos });

console.log({ juegos });
let pos = 1;

let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos });

let poronoIndex = juegos.indexOf("porono");

console.log(poronoIndex);
