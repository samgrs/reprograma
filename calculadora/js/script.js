// Objetivo: saber o valor da hora trabalhada.
/* dias trabalhados
quantas horas de trabalho por dia (na pag html)
valor final (mensal)

multiplicar os dias trabalhados pelas horas trabalhadas por dia
divisão do valor final pelas horas trabalhadas
*/
var inputValorMes = document.querySelector("#ganho-mes")
var inputHorasDia = document.querySelector("#horas-dia")

var spanHora = document.querySelector(".secao__rodape .secao__rodape__valor span")


function calcularValorHora () {
    console.log("Hello, World <3!")
    // dentro da função será executado
    console.log("Valor do mês:", inputValorMes.value)
    console.log("Horas por dia:", inputHorasDia.value)
    console.log("Valor final", spanHora)


    var qtdTotalHoras = inputHorasDia.valueAsNumber * 22
    console.log("Valor total de horas", qtdTotalHoras)

    var valorHora = (inputValorMes.valueAsNumber / qtdTotalHoras).toFixed(2)
    console.log("Valor hora final:", valorHora)

    spanHora.textContent = "R$" + valorHora
}