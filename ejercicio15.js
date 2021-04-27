let password = window.prompt("Introduce una contraseña");

let long;
let num;
let mayus;

let primeraNum;

password.length >= 8 ? (long = true) : (long = false);

password.includes("1") ||
password.includes("2") ||
password.includes("3") ||
password.includes("4") ||
password.includes("5") ||
password.includes("6") ||
password.includes("7") ||
password.includes("8") ||
password.includes("9") ||
password.includes("0")
  ? (num = true)
  : (num = false);

password.substring(0, 1).includes("1") ||
password.substring(0, 1).includes("2") ||
password.substring(0, 1).includes("3") ||
password.substring(0, 1).includes("4") ||
password.substring(0, 1).includes("5") ||
password.substring(0, 1).includes("6") ||
password.substring(0, 1).includes("7") ||
password.substring(0, 1).includes("8") ||
password.substring(0, 1).includes("9") ||
password.substring(0, 1).includes("0")
  ? (primeraNum = false)
  : (primeraNum = true);

long && num && mayus && primeraNum
  ? window.alert("La contraseña cumple los requisitos")
  : window.alert("La contraseña no cumple los requisitos");
///////////////////////////////////////////////////////////////////////////

let password = window.prompt("Introduce una contraseña:");

let longitud;
let numeros = false;
let mayuscula;
let primeraNumero = true;

password.length >= 8 ? (longitud = true) : (longitud = false);

for (let i = 0; i < 10; i++) {
  if (numeros === false) {
    password.includes(i.toString()) ? (numeros = true) : (numeros = false);
  }
}

password.substring(0, 1) == password.substring(0, 1).toUpperCase()
  ? (mayuscula = true)
  : (mayuscula = false);

//Solo tiene un bug: Si el primer carácter es un número, mayúscula es true y por tanto cumple los requisitos//

for (let i = 0; i < 10; i++) {
  if ((primeraNumero = true)) {
    password.substring(0, 1).includes(i.toString())
      ? (primeraNumero = false)
      : (primeraNumero = true);
  }
}

longitud && numeros && mayuscula && primeraNumero
  ? window.alert("La contraseña cumple los requisitos")
  : window.alert("La contraseña no cumple los requisitos.");
