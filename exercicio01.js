const listaValores = [10,12,15,35,40]

// Uma função que devolve os valores que são maiores que a média
function valoresMaioresQueMedia() {
    media = somaItens() / listaValores.length
    return listaValores.filter(valor => valor > media)
}

// Uma função que devolva o menor valor da lista
function menorValor() {
    const listaOrdenada = listaValores.sort()
    return listaOrdenada[0]
}

// Uma função que devolva o valor da soma dos itens da lista
function somaItens() {
    const somaNumeros = listaValores.reduce((soma, valor) => soma + valor, 0)
    return somaNumeros
}

// Uma função que devolva todos os valores que são menores que 20
function valoresMenoresQue20() {
    const menor20 = listaValores.filter(valor => valor < 20)
    return menor20
}

console.log(`Valores maiores que a média: ${valoresMaioresQueMedia()}`)
console.log(`Menor valor da lista: ${menorValor()}`)
console.log(`Soma dos itens da lista: ${somaItens()}`)
console.log(`Valores menores que 20: ${valoresMenoresQue20()}`)