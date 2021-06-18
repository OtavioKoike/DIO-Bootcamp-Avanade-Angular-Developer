// complete as variaveis necessarias

// Para Teste Local (Comentar)
var n = parseInt("3");

// Para Plataforma (Descomentar)
// var n = parseInt(gets());

while (n > 0) { //complete o codigo
  // Para Teste Local (Comentar)
  var c = parseFloat("40.0");
  // Para Plataforma (Descomentar)
  // var c = parseFloat(gets());

  let dias = 0; //atribua o valor correto a variavel
  while (c > 1) { // complete o while
    // complete o codigo
    c /= 2;
    dias++;
  }
  console.log(`${dias} dias`); //complete o código para a saída
  n--;
}