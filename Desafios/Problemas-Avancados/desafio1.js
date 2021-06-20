// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar

// Para Teste Local (Comentar)
let totalItems = 10;
let numeros = ["4", "32", "34", "543", "3456", "654", "567", "87", "6789", "98"];

// Para Plataforma (Descomentar)
// let totalItems = gets();

let itens = [];
let pares = [];
let impares = [];

for (let i = 0; i < totalItems; i++) {
    // Para Teste Local (Comentar)
    itens.push(parseInt(numeros[i]));

    // Para Plataforma (Descomentar)
    // itens.push(parseInt(gets()));
    
  if(itens[i] % 2 == 0){
    pares.push(itens[i]);
  }
  else(impares.push(itens[i]));
}

pares.sort((a,b) => {
  if(a < b){
    return -1;
  }
  if(a > b){
    return 1;
  }
  return 0;
})

impares.sort((a,b) => {
  if(a > b){
    return -1;
  }
  if(a < b){
    return 1;
  }
  return 0;
})

for (let i = 0; i < pares.length; i++) {
  console.log(pares[i]);
}
for (let i = 0; i < impares.length; i++) {
  console.log(impares[i]);
}