function converterDolar(){
    let elemento = document.getElementById ("valor");
    let valor = elemento.value;
    let valorEmReal = parseFloat(valor);

    let valorEmDolar = valorEmReal / 5;

    let resultado = document.getElementById ("valorConvertido");
    let valorConvertido = "O resultado em Dolar é igual a " + valorEmDolar;

    resultado.innerHTML = valorConvertido;

}

function converterEuro(){
    let elemento = document.getElementById ("valor");
    let valor = elemento.value;
    let valorEmReal = parseFloat(valor);

    let valorEmEuro = valorEmReal / 6;

    let resultado = document.getElementById ("valorConvertido");
    let valorConvertido = "O resultado em Euro é igual a " + valorEmEuro;

    resultado.innerHTML = valorConvertido;

}

function converterLibras(){
    let elemento = document.getElementById ("valor");
    let valor = elemento.value;
    let valorEmReal = parseFloat(valor);

    let valorEmLibras = valorEmReal/ 7;

    let resultado = document.getElementById ("valorConvertido");
    let valorConvertido = "O resultado em Libras é igual a " + valorEmLibras;

    resultado.innerHTML = valorConvertido;


}