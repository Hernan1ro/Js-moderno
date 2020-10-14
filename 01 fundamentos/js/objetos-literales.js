let personaje = {
  nombre: "Tony stark",
  codeName: "Iroman",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["mark I", "mark V", "Hulkbuster"],
  direccion: {
    zip: "10880",
    ubicacion: "malilbu california",
  },
  "ultima-pelicula": "infinity war",
};

console.log(personaje);

console.log("nombre:", personaje.nombre);
console.log("nombre:", personaje["nombre"]);

console.log("coors", personaje.coords.lat);
console.log("Numero de trajes: ", personaje.trajes.length);
console.log(
  "Numero de trajes: ",
  personaje.trajes[personaje.trajes.length - 1]
);

const x = "vivo";

console.log(personaje[x]);

console.log(personaje["ultima-pelicula"]);
