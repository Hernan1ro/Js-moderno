const carros = ["ford", "mazda", "toyota", "honda"];
let i = 0;
// while (i < carros.length) {
//   console.log(carros[i]);
//   // i = i+1;
//   i++;
//   // i+=2
// }

while (carros[i]) {
  if (i === 1) {
    // break;
    i++;
    continue;
  }
  console.log(carros[i]);
  i++;
}

console.warn("Do while");

j = 0;

do {
  console.log(carros[j]);
  j++;
} while (carros[j]);
