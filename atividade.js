//operações básicas (adição, subtração, multiplicação e divisão).
var n1 = 6
var n2 = 5

console.log("-----------------------------------------------------------")
console.log("6 + 5 =",n1 + n2)
console.log("6 - 5 =",n1 - n2)
console.log("6 x 5 =",n1 * n2)
console.log("6 / 5 =",n1 / n2)

console.log("-----------------------------------------------------------")
//C = (F - 32 ) / 1,8

var celsius1 = ((150 - 32 ) / 1.8)
var celsius2 = parseInt(celsius1)

console.log("C° =", celsius2)

console.log("-----------------------------------------------------------")
//F = C x (9/5) + 32

var fahrenheit = (50 * (9 / 5) + 32)

console.log("F° =", fahrenheit)

console.log("-----------------------------------------------------------")
//metros para centímetros

var metros = (5 * 100)

console.log("CM =", metros)

console.log("-----------------------------------------------------------")
//o preço final de um produto após um desconto de 10%

var preco = 100
var disconto = (preco * 0.9)

console.log(`R$${preco}`)
console.log(`R$${disconto}`)