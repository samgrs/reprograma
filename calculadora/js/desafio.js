var inputValorHora = document.querySelector("#valor-hora")
var inputHorasProjeto = document.querySelector("#horas-projeto")
var span = document.querySelector("#resposta")

function calcular () {
    console.log("Valor por hora:", inputValorHora.value)
    console.log("Horas no projeto:", inputHorasProjeto.value)

    var resposta = (inputValorHora.valueAsNumber * inputHorasProjeto.valueAsNumber).toFixed(2)
    console.log("Valor do projeto:", resposta)

    span.textContent = "R$" + resposta
}