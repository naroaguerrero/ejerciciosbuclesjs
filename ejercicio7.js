let number2;
let total = 0;

do {
  number2 = parseInt(window.prompt("Escribe un número"));
  total += number2;
} while (number2 !== 0);
document.write(`La suma de los valores introducidos es ${total}`);
document.write("Los valores negativos se ignoran");
