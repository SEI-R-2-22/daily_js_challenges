// Square Every Digit

const { sumNumbers } = require('./challenges')

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// const squareDigits = (num) => {
//   let nStr = num.toString()
//   let digit = ''
//   for (let i = 0; i < nStr.length; i++) {
//     digit = parseInt(nStr[i] * nStr[i])
//   }
//   return digit
// }

const squareDigits = (num) => {
  let nStr = num
    .toString()
    .split('')
    .map((x) => x * x)
    .map((x) => x.toString())
  let str = ''
  for (let i = 0; i < nStr.length; i++) {
    str += nStr[i]
  }

  return parseInt(str)
}

console.log(squareDigits(2224))
