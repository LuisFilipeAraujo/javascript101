function olaMundo() {

    const mostrar = "OLÁ MUNDO";

    alert(mostrar);
}

function operadores() {
    let vnumero1 = parseInt(prompt("Digite o primeiro número: "));
    let vnumero2 = parseInt(prompt("Digite o segundo número: "));

    var JanelaPopUp = window.open("", "popup", "width=400, height=300");


    JanelaPopUp.document.write(`<h1>Número 1 = ${vnumero1} <br> Número 2 = ${vnumero2} <br><br>
    A soma=${vnumero1 + vnumero2} <br>
    A multiplicação=${vnumero1 * vnumero2}<br>
    A divisão= ${vnumero1 / vnumero2} <br>
    O módulo = ${vnumero1 % vnumero2}</h1>`);

}

function calcularMedia() {
    let nota1 = parseInt(prompt("Digite a primeira nota: "));
    let nota2 = parseInt(prompt("Digite a segunda nota: "));
    let nota3 = parseInt(prompt("Digite a terceira nota: "));

    let media = (nota1 + nota2 + nota3) / 3;

    if (media >= 7) {
        console.log("aprovado");
        var condicao = "aprovado";
    }
    else if (media >= 2 && media < 7) {
        console.log("aprovado");
        var condicao = "recuperação";
    }
    else {
        console.log("reprovado");
        var condicao = "reprovado";
    }

    let JanelaPopUp = window.open("", "popup", "width=700, height=400");


    JanelaPopUp.document.write(`<h1>Para ser aprovado o aluno deve tirar 7 ou mais na média <br><br>
    Nota 1 = ${nota1} <br> 
    Nota 2 = ${nota2} <br> 
    Nota 3 = ${nota3} <br><br>
    A média = ${media.toFixed(2)} <br>
    Condição do aluno : ${condicao}
   </h1>`);
}

function maior() {
    let vnumero1 = parseInt(prompt("Digite o primeiro número: "));
    let vnumero2 = parseInt(prompt("Digite o segundo número: "));

    let num;
    var JanelaPopUp = window.open("", "popup", "width=400, height=300");

    if (vnumero1 > vnumero2) {
        num = "O número 1 é maior";
    } else if (vnumero2 > vnumero1) {
        num = "O número 2 é maior";
    } else {
        num = "Os números são iguais";
    }
    JanelaPopUp.document.write(`<h1>
    Número 1 = ${vnumero1} <br> 
    Número 2 = ${vnumero2} <br><br>
    Resultado = ${num} 
    <br>
    </h1>`);
}

// function parOuImpar() {
//     let numero = parseInt(prompt("Digite o número: "));

//     var JanelaPopUp = window.open("", "popup", "width=400, height=300");

//     if (num % 2 === 0) {
//         var num = "O número é par";
//     } else {
//         var num = "O número é ímpar";
//     }
//     JanelaPopUp.document.write(`<h1>
//     O Número é = ${numero} <br> 
//     Portanto ${num} <br><br>
//     </h1>`);
// }

function parOuImpar() {
    let num = Number(window.prompt('Digite um número: '))
    let tipo
    if (num % 2 == 0) {
        tipo = '<strong>PAR</strong>'
    } else {
        tipo = '<strong>ÍMPAR</strong>'
    }

    let res = document.querySelector('section#result')
    res.innerHTML = `<p>O número ${num} que foi digitado é ${tipo}!</p>`
}

function vogalOuConsoante() {
    let letra = prompt("Digite uma letra: ").toUpperCase();

    var JanelaPopUp = window.open("", "popup", "width=400, height=300");

    if (letra == "A" ||
        letra == "E" ||
        letra == "I" ||
        letra == "O" ||
        letra == "U") {
        JanelaPopUp.document.write
        (`<h1>O Caractér é ${letra} é vogal<br></h1>`);
    }else {
        JanelaPopUp.document.write(`<h1>O Caractér é = ${letra} é consoante<br></h1>`);
    }
}

function ordemCrescente(){

    let numero1 = parseInt(prompt("Digite o primeiro número: "));
    let numero2 = parseInt(prompt("Digite o segundo número: "));
    let numero3 = parseInt(prompt("Digite o terceiro número: "));

    let maior;
    let meio;
    let menor;

    var JanelaPopUp = window.open("", "popup", "width=400, height=300");

    // DEFINE MAIOR
    if(numero1>numero2 && numero1>numero3){
         maior = numero1;
    }else if(numero2>numero1&&numero2>numero3){
         maior = numero2;
    }else if(numero3>numero2 && numero3>numero1){
         maior=numero3;
    }

    // DEFINE MENOR
    if(numero1<numero2 && numero1<numero3){
         menor = numero1;
    }else if(numero2<numero1&&numero2<numero3){
         menor = numero2;
    }else if(numero3<numero2 && numero3<numero1){
         menor=numero3;
    }

    // DEFINE MEIO
    if(numero1>numero2 && numero1<numero3){
         meio = numero1;
    }else if(numero2>numero1&&numero2<numero3){
         meio = numero2;
    }else if(numero3>numero2 && numero3<numero1){
         meio=numero3;
    }

    // EXIBE RESULTADO
    JanelaPopUp.document.write(`<h1>
    Crescente = ${menor}, ${meio}, ${maior} <br><br>
    Decrescente = ${maior}, ${meio}, ${menor}<br><br>
    </h1>`);
}

function ordemCrescenteFacil(){
    let num1 = prompt("Digite o primeiro número:");
    let num2 = prompt("Digite o segundo número: ");
    let num3 = prompt("Digite o terceiro número: ");

    let nums = [num1,num2, num3];

    var JanelaPopUp = window.open("", "popup", "width=400, height=300");

    // Ordena em ordem crescente
    nums.sort(function(a, b){
        return a - b;
    });

    JanelaPopUp.document.write(`<h1>Ordem Crescente ${nums}</h1>`);

    // Ordena em ordem decrescente
    nums.sort(function(a, b){
        return b - a;
    });

    JanelaPopUp.document.write(`<h1>Ordem Decrescente ${nums}</h1>`);
}


function gasolinaOuEtanol(){
    const precoGasolina = parseFloat(prompt("informe o valor do Gasolina"));
    const precoEtanol = parseFloat(prompt("informe o valor do Etanol"));

    const resultado = (precoEtanol / precoGasolina) * 100;
    const valorArredondado = Math.trunc(resultado);

    var JanelaPopUp = window.open("", "popup", "width=400, height=300");

    if(valorArredondado > 70.0){
        JanelaPopUp.document.write(`<h1>A este valor vale a pena colocar Gasolina!</h1>`);
    }else if(valorArredondado < 70.0){
        JanelaPopUp.document.write(`<h1>A este valor vale a pena colocar Etanol!</h1>`);
    }else{
        JanelaPopUp.document.write(`<h1>Tanto faz abastecer com Gasolina ou Etanol!</h1>`);
    }
}

function fatorial() {
    let saida = document.getElementById('saida')
    let n = Number(document.getElementById('fnum').value)

    saida.innerHTML += `<h2>Calculando ${n}!</h2>`
    let c = n
    let fat = 1
    while (c > 1) {
        saida.innerHTML += `${c} x `
        fat *= c // Correspondente ao cálculo fat = fat * c
        c --
    }
    saida.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')}</strong>`
    // Usei o toLocaleString() na linha acima apenas para aparecerem os separadores de milhar/milhões/etc...
}