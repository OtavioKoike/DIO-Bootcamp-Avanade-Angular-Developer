//continue a solução

let alcohol = 0;
let gasoline = 0;
let diesel = 0;

let code = 0;

while (code != 4) {
  // Para Teste Local (Comentar)
  code = ++code
  // Para Plataforma (Descomentar)
  // code = parseInt(gets());

  switch (code) {
    case 1:
      alcohol++;
      break;
    case 2:
      gasoline++;
      break;
    case 3:
        diesel++;
      break;
    case 4:
      break;
  }
}

console.log("MUITO OBRIGADO");
console.log("Alcool: " + alcohol);
console.log("Gasolina: " + gasoline);
console.log("Diesel: " + diesel);


