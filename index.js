
code1 = 7 + 3
console.log(code1)

code2 = 60 / 2 - 5 + 15
console.log(code2)

code3 = 39 % 1515
console.log(code3)

message = `The vault has been secured. The combination is: `

codeA = `${code1}-${code2}-${code3}`

console.log(message + codeA)

codeB = codeA

console.log(codeB)

console.log(message + codeA + ` ` + codeB)