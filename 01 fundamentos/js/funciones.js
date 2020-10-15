function saludar(nombre) {
  console.log(arguments);
  console.log("hola " + nombre);
}

const saludar2 = function (nombre) {
  console.log("Hola " + nombre);
};

const saludarFlecha = (name) => {
  console.log("hola " + name);
};

saludar("Hernan", 40, true, "costa rica");
saludar2("Hernan");
saludarFlecha("nigga");
