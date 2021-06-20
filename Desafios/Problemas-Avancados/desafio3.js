// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Para Teste Local (Comentar)
let totalItems = 2;
let lista = ["carne laranja suco picles laranja picles", "laranja pera laranja pera pera"]
// Para Plataforma (Descomentar)
// let totalItems = gets();

for (var i = 0; i < totalItems; i++) {
   // Para Teste Local (Comentar)
   let itens = lista[i];

// Para Plataforma (Descomentar)
//   let itens = gets();
  
  let itensOrdenados = itens.split(" ").sort();
  let itensUnicos = [...new Set(itensOrdenados)]; // Implemente aqui a lógica para ter os itens unicos
  let resposta = [...itensUnicos].join(" ");
  console.log(resposta);
}