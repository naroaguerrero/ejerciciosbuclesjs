let total = 0;

let number;

do {
  number = parseInt(window.prompt("Escribe otro número"));
  for (let i = 1; i <= number; i++) {
    total += i;
    console.log(total);
  }
} while (number !== 0);
console.log("Final");
