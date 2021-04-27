let numero = window.prompt("Introduce un número");
let linea = "";

for (i = 1; i <= numero; i++) {
  for (j = 0; j < i; j++) {
    linea += "*";
  }
  console.log(linea);
  linea = "";
}
