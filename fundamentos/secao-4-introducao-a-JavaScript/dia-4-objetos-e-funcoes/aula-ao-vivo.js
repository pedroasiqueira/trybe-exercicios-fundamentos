function biggest (firsNumber, secondNumber) {
    if(firsNumber > secondNumber) {
        return 'o maior número é o : ' + firsNumber
    } else if (firsNumber === secondNumber) {
        return 'São iguais!'
    } else {
        return 'o maior número é o : ' + secondNumber
    }
}

console.log(biggest(10, 7))
console.log(biggest(10, 10))
console.log(biggest(10, 11))