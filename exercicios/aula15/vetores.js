let valores = [7, 6, 4, 3, 9, 0]

console.log(valores)

/*
for(let pos = 0; pos < valores.length; pos++) {
    console.log(`Na posição ${pos} o valor é ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`Na posição ${pos} o valor é ${valores[pos]}`)
}