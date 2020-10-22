// 2C = Two of Clubs (Tréboles)
// 2D = Two of Diamonds (Tréboles)
// 2H = Two of Hearts (Tréboles)
// 2S = Two of Spades (Tréboles)

let deck = [];
const tipos = ["C", "D", "H", "S"];
const letras = ["A", "J", "K", "Q"];
let puntosJugador = 0,
  puntosComputadora = 0;

//referencias del html
const btnPedir = document.querySelector("#btnPedir");
const divCartasJugador = document.querySelector("#jugador-cartas");
const smalls = document.querySelectorAll("small");
// funcion crea un nuevo deck
const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    // for (let j = 0; j < tipos.length; j++) {
    //   deck.push(i + tipos[j]);
    // }
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }
  for (let tipo of tipos) {
    for (let letra of letras) {
      deck.push(letra + tipo);
    }
  }
  deck = _.shuffle(deck);
  // console.log(deck);
  return deck;
};

crearDeck();

// esta funcion me permite tomar una carta

const pedirCarta = () => {
  if (deck.length === 0) {
    throw "No hay cartas en el Deck";
  }
  const carta = deck.shift();
  return carta;
};

// console.log(pedirCarta());

// funcion valor carta

// const valorCarta = (carta) => {
//   const valor = carta.substring(0, carta.length - 1);
//   let puntos = 0;
//   if (isNaN(valor)) {
//     puntos = valor === "A" ? 11 : 10;
//   } else {
//     console.log("es un numero");
//     puntos = valor * 1;
//   }
//   console.log(puntos);
// };

const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
  // let puntos = 0;
  // puntos =
  //   isNaN(valor) == true
  //     ? (puntos = valor === "A" ? 11 : 10)
  //     : (puntos = valor * 1);
  // console.log({ puntos });
};

valor = valorCarta(pedirCarta());
// console.log({ valor });

// Eventos

btnPedir.addEventListener("click", () => {
  const carta = pedirCarta();
  puntosJugador += valorCarta(carta);
  smalls[0].innerText = puntosJugador;
  // <img class="carta" src="/assets/cartas/10D.png" alt="" />;
  const imgCarta = document.createElement("img");
  imgCarta.src = `/assets/cartas/${carta}.png`;
  imgCarta.classList.add("carta");
  divCartasJugador.append(imgCarta);

  if (puntosJugador > 21) {
    btnPedir.disabled = true;
    console.warn("Has perdido");
  } else if (puntosJugador === 21) {
    btnPedir.disabled = true;
    console.warn("Genial, un 21");
  }
});
