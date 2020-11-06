class Persona {
  static _conteo = 0;
  static get conteo() {
    return Persona._conteo + " instancias";
  }

  static mensaje() {
    // console.log(this.nombre);
    console.log("Hola a todos soy un método estático");
  }
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
    Persona._conteo++;
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

// console.log(spiderman.getComidaFavorita);

// console.log(spiderman);

// Persona._conteo = 2;

console.log("Conteo estático: ", Persona._conteo);
Persona.mensaje();
