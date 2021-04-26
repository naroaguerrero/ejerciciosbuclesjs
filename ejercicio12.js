let number = window.prompt("Escribe un número de 3 cifras");
let total = 0;
let conter = 0;

while (conter < number.length) {
  total += parseInt(number[conter]);
  conter++;
}
console.log(total);

/* for (let i = 0; i < number.length; i++) {
    total = total + parseInt(number[i]);
}console.log()

 */
