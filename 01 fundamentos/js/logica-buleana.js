const regresaTrue = () => {
  console.log("regresa true");
  return true;
};

const regresaFalse = () => {
  console.log("regresa false");
  return false;
};

console.warn("Not o la negación");
console.log(true);
console.log(!true);

console.log(regresaTrue());

console.warn("and");

console.log(true && true); // true
console.log(true && !true); // false

console.log(regresaFalse() && regresaTrue());

console.log("================");

console.log("cuatro condiciones:", true && true && true && false);

regresaTrue() && regresaFalse();
regresaFalse() && regresaTrue();

console.warn("OR");
console.log(true || false);
console.log(false || false);

console.log(regresaTrue() || regresaFalse());
console.log("cuatro condiciones:", true || true || true || false);
