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

console.warn("Asignaciones Pro-tip");
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;
const a1 = true && "Hola mundo" && 150;
const a2 = "Hola" && "Mundo" && soyFalso && true;
const a3 = soyFalso || "ya no soy falso";
const a4 =
  soyFalso || soyUndefined || soyNull || "Ya no soy falso de nuevo" || true;
const a5 =
  soyFalso ||
  soyUndefined ||
  regresaTrue() ||
  "Ya no soy falso otra vez" ||
  true;
console.log({ a1, a2, a3, a4, a5 });

if (true || true || true || false) {
  console.log("hacer algo");
} else {
  console.log("hacer otra cosa");
}
