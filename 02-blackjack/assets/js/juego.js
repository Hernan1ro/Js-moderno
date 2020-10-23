(() => {
  "use strict";

  let deck = [];
  const tipos = ["C", "D", "H", "S"],
    letras = ["A", "J", "K", "Q"];
  // let puntosJugador = 0,
  //   puntosComputadora = 0;
  let puntosJugadores = [];

  //referencias del html
  const btnPedir = document.querySelector("#btnPedir"),
    btnDetener = document.querySelector("#btnDetener"),
    btnNuevoJuego = document.querySelector("#btnNuevo");

  const divCartasJugador = document.querySelectorAll(".divCartas"),
    smalls = document.querySelectorAll("small"),

  //Esta funcion incicializa el juego
  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck();
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }
  };

  // funcion crea un nuevo deck
  const crearDeck = () => {
    deck = [];
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
    return _.shuffle(deck);
  };

  // esta funcion me permite tomar una carta

  const pedirCarta = () => {
    if (deck.length === 0) {
      throw "No hay cartas en el Deck";
    }
    return deck.shift();
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

  //  turno: 0 = primer jugador y el último será la computadora
  const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] += valorCarta(carta);
    smalls[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  };

  //Turno de la computadora
  const turnoComputadora = (puntosMinimos) => {
    do {
      const carta = pedirCarta();
      acumularPuntos(carta, puntosJugadores.length - 1);
      const imgCarta = document.createElement("img");
      imgCarta.src = `/assets/cartas/${carta}.png`;
      imgCarta.classList.add("carta");
      divCartasComputadora.append(imgCarta);
      if (puntosMinimos > 21) {
        break;
      }
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);
    // if (puntosJugador === 21 || puntosComputadora > 21) {
    //   alert("Felicidades has ganado");
    // } else if (puntosJugador > 21 || puntosComputadora === 21) {
    //   alert("Has perdido");
    // }
    setTimeout(() => {
      if (puntosComputadora === puntosMinimos) {
        alert("Nadie Gana :(");
      } else if (puntosMinimos > 21) {
        alert("Computadora gana");
      } else if (puntosComputadora > 21) {
        alert("Genial! Has ganado");
      } else {
        alert("Computadora Gana");
      }
    }, 500);
  };

  // valor = valorCarta(pedirCarta());
  // // console.log({ valor });

  // Eventos

  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta();
    const puntosJugador = acumularPuntos(carta, 0);
    const imgCarta = document.createElement("img");
    imgCarta.src = `/assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
      console.warn("Has perdido");
    } else if (puntosJugador === 21) {
      btnDetener.disabled = true;
      btnPedir.disabled = true;
      turnoComputadora(puntosJugador);
      console.warn("Genial! Un 21, has ganado");
    }
    // console.log({ puntosJugador, puntosComputadora });
    // if (puntosJugador === 21 || puntosComputadora > 21) {
    //   alert("Felicidades has ganado");
    // } else if (puntosJugador > 21 || puntosComputadora === 21) {
    //   alert("Has perdido");
    // }
  });
  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  });

  btnNuevoJuego.addEventListener("click", () => {
    // deck = [];
    // deck = crearDeck();
    console.clear();
    inicializarJuego();
    // puntosComputadora = 0;
    // puntosJugador = 0;
    // smalls[0].innerText = 0;
    // smalls[1].innerText = 0;
    // btnDetener.disabled = false;
    // btnPedir.disabled = false;
    // divCartasComputadora.innerHTML = "";
    // divCartasJugador.innerHTML = "";
    // console.clear();
  });
})();
