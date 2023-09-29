const array = [5,12,20,7,9] 

const [primeiro, ...restante] = array

console.log(`Primeiro = ${primeiro}`)
console.log(`Restante = ${restante}`)