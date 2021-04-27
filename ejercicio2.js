let numero = parseInt(window.prompt("Escribe un número para saber su suma"));
let total = 0;

for (let i = 0; i <= numero; i++) {
  total = total + i;
}

console.log(`La suma de ${numero} es ${total}`);
