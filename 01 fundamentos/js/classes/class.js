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

  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
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

// console.log(Ironman);

// spiderman.quienSoy();
// Ironman.quienSoy();

spiderman.miFrase();
// Ironman.miFrase();

spiderman.setComidaFavorita = "El pie de cereza de tia May";

console.log(spiderman.getComidaFavorita);
