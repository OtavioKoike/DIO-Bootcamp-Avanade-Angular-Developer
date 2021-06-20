// Para Teste Local (Comentar)
let valor = parseInt("576");

// Para Plataforma (Descomentar)
// let valor = parseInt(gets());
console.log(valor)

let cem = parseInt(valor / 100);
valor -= cem * 100;

let cinquenta = parseInt(valor / 50);
valor -= cinquenta * 50;

let vinte = parseInt(valor / 20);
valor -= vinte * 20;

let dez = parseInt(valor / 10);
valor -= dez * 10;

let cinco = parseInt(valor / 5);
valor -= cinco * 5;

let dois = parseInt(valor / 2);
valor -= dois * 2;

console.log(`${cem} nota(s) de R$ 100,00`);
console.log(`${cinquenta} nota(s) de R$ 50,00`);
console.log(`${vinte} nota(s) de R$ 20,00`);
console.log(`${dez} nota(s) de R$ 10,00`);
console.log(`${cinco} nota(s) de R$ 5,00`);
console.log(`${dois} nota(s) de R$ 2,00`);
console.log(`${valor} nota(s) de R$ 1,00`);