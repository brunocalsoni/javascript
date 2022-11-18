let num = [2, 5, 6]
num[3] = 3 
num.push(1)
num.push(4)
num[6] = 8


console.log(num.length)
console.log(num)
num.sort()
console.log(num)


let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`Esse valor não existe`)
} else {
    console.log(`O valor está na posição ${pos}`)
}
