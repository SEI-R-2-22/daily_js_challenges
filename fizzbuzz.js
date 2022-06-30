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

// const squareDigits = (num) => {
//   let nStr = num
//     .toString()
//     .split('')
//     .map((x) => x * x)
//     .map((x) => x.toString())
//   let str = ''
//   for (let i = 0; i < nStr.length; i++) {
//     str += nStr[i]
//   }

//   return parseInt(str)
// }

// console.log(squareDigits(2224))

// Move the first letter of each word to the end of it,
// then add "ay" to the end of the word. Leave punctuation
// marks untouched.

// const pigIt = (str) => {
//   let punc
//   if (str.includes('.')) {
//     punc = '.'
//   }
//   if (str.includes('?')) {
//     punc = '?'
//   }
//   if (str.includes('!')) {
//     punc = '!'
//   }
//   let newStr = str
//     .split(' ')
//     .filter((x) => x !== '.')
//     .filter((x) => x !== '!')
//     .filter((x) => x !== '?')
//     .map((x) => (x += x[0] + 'ay'))
//     .map((x) => x.substr(1))
//     .join(' ')
//   if (punc === '.') return newStr + ' .'
//   if (punc === '?') return newStr + ' ?'
//   if (punc === '!') return newStr + ' !'
//   return newStr
// }

// console.log(pigIt('Pig latin is cool .'))

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// const generateHashtag = (str) => {
//   if (str === '') return false
//   let newStr = str.split(' ').map((x) => x.charAt(0).toUpperCase() + x.slice(1))
//   newStr.unshift('#')
//   let hashtag = newStr.join('')
//   return hashtag
// }

// console.log(generateHashtag('Do We have A Hashtag'))

// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
// because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not.
// Ignore numbers and punctuation.

const isPangram = (string) => {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ]
  let count = 0
  for (let i = 0; i < alphabet.length; i++) {
    if (
      string.includes(alphabet[i]) ||
      string.includes(alphabet[i].toUpperCase())
    )
      count++
    console.log(count)
  }
  if (count === 26) return true
  return false
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'))
