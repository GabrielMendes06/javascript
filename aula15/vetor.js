let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
/*for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}*/

for(let pos = 0; pos < valores.length; pos++) {
    console.log(valores[pos])
}
console.log(valores.indexOf(4))