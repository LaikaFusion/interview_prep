const numberReversed = reverseNumber(12345);
console.log(numberReversed);

function reverseNumber(num) {
    num += '';
    newNum = num.split('').reverse().join('')
    final = parseInt(newNum);
    return final;
}