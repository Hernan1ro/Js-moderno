class Persona {
  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  constructor(
    nombre = "sin nombre",
    codigo = "sin codigo",
    frase = "sin frase"
  ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }
  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }
  miFrase() {
    this.quienSoy();
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

const spiderman = new Persona(
  "Peter Parker",
  "Spiderman",
  "Soy tu vecino amigable"
);
const Ironman = new Persona("Tony Stark", "IronMan", "Soy Ironman");

console.log(spiderman);
// console.log(Ironman);

// spiderman.quienSoy();
// Ironman.quienSoy();

spiderman.miFrase();
Ironman.miFrase();
