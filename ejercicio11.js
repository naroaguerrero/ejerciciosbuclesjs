let number = window.prompt("Introduce un número de varias cifras para verlo al revés");
let final = ""
for (let i = 0; i <= number.length; i++) {
  let ultimo = number.substring(number.length - i, (number.length - i) + 1);
  final += ultimo;
}
console.log(final);
