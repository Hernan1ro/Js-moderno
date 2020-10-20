const dia = 0;
const horaAtual = 10;

let horaApertura;
let mensaje;

// if (dia === 0 || dia === 6) {
// if ([0, 6].includes(dia)) {
//   console.log("Fin de semana");
//   horaApertura = 9;
// } else {
//   console.log("Dia de la semana");
//   horaApertura = 11;
// }

horaApertura = [0, 6].includes(dia) ? 9 : 11;

// if (horaAtual >= horaApertura) {
//   mensaje = "esta abierto";
// } else {
//   mensaje = `esta cerrado, hoy abrimos a las ${horaApertura}`;
// }

mensaje =
  horaAtual >= horaApertura
    ? "está abierto"
    : `está cerrado, hoy abrimos a las ${horaApertura}`;

console.log({ horaApertura, mensaje });
