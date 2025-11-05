// let nombre = "elian"
// function saludar(nombre) {
//   console.log("Hola " + nombre);
// }
// saludar(nombre)

function Saludo(nombre) {
  return `Hola ${nombre}`;
}

function saludar(nombre) {
  console.log(Saludo(nombre));
}
saludar("Elian");