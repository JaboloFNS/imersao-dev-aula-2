function converterDolar(){
    let elemento = document.getElementById ("valor");
    let valor = elemento.value;
    let valorEmReal = parseFloat(valor);

    let valorEmDolar = valorEmReal / 5.24;
    let valorEmDolarFixed = valorEmDolar.toFixed(2);

    let resultado = document.getElementById ("valorConvertido");
    let valorConvertido = "O resultado em Dolar é igual a " + valorEmDolarFixed;
    let erro = "Ensira um valor válido e tente novamente";
    let x = valorEmDolarFixed;

    if(x=" "){
        resultado.innerHTML = erro;
    } else{
        resultado.innerHTML = valorConvertido;
    }

    

}

function converterEuro(){
    let elemento = document.getElementById ("valor");
    let valor = elemento.value;
    let valorEmReal = parseFloat(valor);

    let valorEmEuro = valorEmReal / 5.19;
    let valorEmEuroFixed = valorEmEuro.toFixed(2);

    let resultado = document.getElementById ("valorConvertido");
    let valorConvertido = "O resultado em Euro é igual a " + valorEmEuroFixed;

    resultado.innerHTML = valorConvertido;

}

function converterLibras(){
    let elemento = document.getElementById ("valor");
    let valor = elemento.value;
    let valorEmReal = parseFloat(valor);

    let valorEmLibras = valorEmReal/ 6.04;
    let valorEmLibrasFixed = valorEmLibras.toFixed(2);

    let resultado = document.getElementById ("valorConvertido");
    let valorConvertido = "O resultado em Libras é igual a " + valorEmLibrasFixed;

    resultado.innerHTML = valorConvertido;
}