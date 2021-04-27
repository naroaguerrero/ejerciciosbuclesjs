let number = parseInt(
  window.prompt(
    "Introduce P para mostrar los número pares o I para mostrar los impares"
  ).toUpperCase
);


for (let i = 1; i < 100; i++) {
  if (i % 2 === 0 && number === "P") {
    console.log(i);
  } else if (i % 2 !== 0 && number === "I") {
    console.log(i);
  }
  else{
    ('Te has equivocado')
  }
}



