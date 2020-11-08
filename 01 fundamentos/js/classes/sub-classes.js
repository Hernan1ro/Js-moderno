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

class Heroe extends Persona {
  clan = "sin clan";
  constructor(nombre, codigo, frase) {
    super(nombre, codigo, frase);
    this.clan = "los avengers";
  }
  quienSoy() {
    console.log(`Soy ${this.nombre}, ${this.clan}`);
    super.quienSoy();
  }
}

const spiderman = new Heroe("Peter", "Spiderman", "Soy una araña");
console.log(spiderman);
spiderman.quienSoy();
