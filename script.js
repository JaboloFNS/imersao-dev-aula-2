function Converter() {
    var elemento = document.getElementById("valor");
    var valor = elemento.value;
    var valorEmDolar = parseFloat(valor);

    var valorEmReal = valorEmDolar * 5.43;

    var elementValue = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é " + valorEmReal;

    elementValue.innerHTML = valorConvertido;
}