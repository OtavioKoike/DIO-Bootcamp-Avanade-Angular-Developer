// Para Teste Local (Comentar)
const participantes = parseInt('3');
const notas = ["1000", "1000", "1000"];
const rafael = notas[0];

// Para Plataforma (Descomentar)
// const participantes = parseInt(gets());
// const rafael = Number(gets());

let eleito = true;

for(let i = 1; i < participantes; i++){
    // Para Teste Local (Comentar)
    const concorrente = notas[i];
    
    // Para Plataforma (Descomentar)
    // const concorrente = Number(gets());
   
  if (concorrente > rafael ) {
    eleito = false;
  }
}

console.log(eleito ? "S" : "N");