var nome = "Otavio Koike";
var idade = 22;
var idade2 = 18;
var frase = "Japao e o melhor time do mundo";

// alert("Bem Vindo " + nome)
// alert(nome + " tem " + idade + " anos")
// alert(idade + idade2)

console.log(nome);
console.log(idade);
console.log(frase.replace("Japao", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

// ------------------------------------------------------------------------------------------------------
var lista = ["maca", "pera", "laranja"];

lista.push("uva");
console.log(lista);

lista.pop();
console.log(lista);

console.log(lista[1]);
// alert(lista[1]);

console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());  //Transforma em String separando com virgula
console.log(lista.join(" - ")); //Transforma em String mas com o seu separador

var frutas = [{nome: "maca", cor: "vermelho"},  {nome: "uva", cor: "roxo"}];
console.log(frutas[1].nome)

// ------------------------------------------------------------------------------------------------------
// var idade = prompt("Qual sua idade? ")
// if(idade >= 18){
//     alert("Maior de idade")
// }else {
//     alert("Menor de idade")
// }

var count = 0;
while(count < 5){
    console.log(count);
    count++; 
}

for(count = 5; count < 10; count++){
    console.log(count);
}

var d = new Date();
console.log(d);
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());

// ------------------------------------------------------------------------------------------------------
function soma (a, b){
    return a + b;
}

console.log(soma(5, 10));

var validar = 0;
function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }else {
        validar = false;
    }
    return validar;
}

// var idade = prompt("Qual sua idade?");
// console.log(validaIdade(idade));
// console.log(validar);

// ------------------------------------------------------------------------------------------------------
function clicou(){
    // alert("Obrigado por Clicar!!!");

    document.getElementById("agradecimento").hidden = false;
    console.log(document.getElementById("agradecimento"));
    document.getElementById("bye").innerHTML = "Bye"
}

function redirecionar(){
    window.open("https://github.com/OtavioKoike/DIO-Bootcamp-Avanade-Angular-Developer");
    window.location.href = "https://github.com/OtavioKoike/DIO-Bootcamp-Avanade-Angular-Developer"
}

// function trocar(){
//     document.getElementById("bye").innerHTML = "Bye too"
// }

function trocar(elemento){
    elemento.innerHTML = "Bye too"
}

// function voltar(){
//     document.getElementById("bye").innerHTML = "Bye"
// }

function voltar(elemento){
    elemento.innerHTML = "Bye"
}

function load(){
    // alert("pagina carregada")
}

function change(elemento){
    console.log(elemento.value);
}