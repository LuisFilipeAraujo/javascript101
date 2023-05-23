function olaMundo(){

    const mostrar = "OLÁ MUNDO";

    alert(mostrar);
}

function operadores(){
    let vnumero1 = parseInt(prompt("Digite o primeiro número: "));
    let vnumero2 = parseInt(prompt("Digite o segundo número: "));

    var JanelaPopUp = window.open("", "popup", "width=400, height=300");


    JanelaPopUp.document.write(`<h1>Número 1 = ${vnumero1} <br> Número 2 = ${vnumero2} <br><br>
    A soma=${vnumero1 + vnumero2} <br>
    A multiplicação=${vnumero1 * vnumero2}<br>
    A divisão= ${vnumero1 / vnumero2} <br>
    O módulo = ${vnumero1 % vnumero2}</h1>`);
    
}