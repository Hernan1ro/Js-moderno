const fer = {
  nombre: "fernando",
  edad: 30,
  imprimirDatos() {
    console.log(`Nombre: ${this.nombre}-Edad: ${this.edad}`);
  },
};
const pedro = {
  nombre: "pedro",
  edad: 15,
  imprimirDatos() {
    console.log(`nombre: ${this.nombre}-Edad: ${this.edad}`);
  },
};

// pedro.imprimirDatos();
// fer.imprimirDatos();

function Persona(nombre, edad) {
  console.log("Se ejecutó esta linea");
  this.nombre = nombre;
  this.edad = edad;
  this.imprimirDatos = () => {
    console.log(`nombre: ${this.nombre}-Edad: ${this.edad}`);
  };
}

const maria = new Persona("Maria", 18);

console.log(maria);

maria.imprimirDatos();
