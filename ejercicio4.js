let plusNumber10 = 0;

/* while (conter < 10) {
  conter++;
  let number = parseInt(window.prompt("Escribe un  número"));
  plusNumber10 += number;
  console.log(plusNumber10)
}
document.write(`La media de los 10 núemros es ${plusNumber10/10}`) */

for (let i = 0; i < 10; i++) {
  let number = parseInt(window.prompt("Escribe un número"));
  plusNumber10 += number;
  console.log(plusNumber10);
}
document.write(`La media de los 10 números introducidos es ${plusNumber10 / 10}`);
