let number = parseInt(
  window.prompt(
    "Introduce P para mostrar los número pares o I para mostrar los impares"
  )
);
let number2 = 100;

for (let i = 1; i < number2; i++) {
  if (i % 2 === 0 && i === "P") {
    document.write(i);
  } else if (i % 2 !== 0 && i === "I") {
    document.write(i);
  }
}
