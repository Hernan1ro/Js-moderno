const elMayor = (a, b) => (a > b ? a : b);
const menbresia = (miembro) => (miembro ? "2 dolares" : "10 dolares");
console.log(elMayor(10, 15), menbresia(!true));

const amigo = true;
const amigosArrr = ["peter", "tony", "Dr strange", amigo ? "Thor" : "Loki"];

console.log(amigosArrr);

const nota = 82.5;
const grado =
  nota >= 95
    ? "A+"
    : nota >= 90
    ? "A"
    : nota >= 85
    ? "B+"
    : nota >= 80
    ? "B"
    : nota >= 75
    ? "C+"
    : nota >= 70
    ? "C"
    : "F";
console.log(grado);
