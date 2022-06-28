function reverseUpcaseString(str) {
  let newStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
  }
  return newStr.toUpperCase()
}
console.log(reverseUpcaseString('popcorn'))

function removeEnds(string) {
  let newStr = ''
  for (let i = 1; i < string.length - 1; i++) {
    newStr += string[i]
  }
  return newStr
}

console.log(removeEnds('popcorn'))

let arr = [1, 2, 3, 4, 5]
const absoluteSum = (arrNums) => {
  // Return the absolute sum of all INTEGERS in an array
  // Note not all items in the array may be a number datatype
  // Remember to check the type of the element
  let sum = 0
  arrNums.forEach((num) => {
    if (Number.isInteger(num)) {
      sum += num

      // console.log(sum)
    }
  })
  return sum
}

console.log(absoluteSum(arr))

const returnPower = (num, pow) => {
  // return the provided num to the power provided
  let base = num
  for (let i = 0; i < pow; i++) {
    num *= base
    console.log(num)
  }
}
console.log(returnPower(2, 3))

function charCount(string) {
  let charObj = {}
  for (let i = 1; i < string.length + 1; i++) {}
  return charObj
}

console.log(charCount('string'))

function formatWithPadding(n, char, length) {
  let padChar = ''
  let numString = n.toString()
  for (let i = numString.length; i < length; i++) {
    padChar += char
    console.log(padChar)
  }
  return (padChar += n)
}

console.log(formatWithPadding(123, '3', 5))

function isPalindrome(string) {
  let newStr = ''
  let revStr = ''
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] !== ' ') newStr += string[i]
  }
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] !== ' ') revStr += string[i]
  }
  console.log(newStr, revStr)
  if (newStr === revStr) {
    return true
  }
  return false
}
function isPalindrome1(string) {
  let newStr = ''
  for (let i = string.length - 1; i >= 0; i--) {
    newStr += string[i]
  }
  if (newStr.toLowerCase() === string.toLowerCase()) {
    return true
  }
  return false
}
console.log(isPalindrome('racecar racecar'), isPalindrome1('racecar racecar'))

function hammingDistance(str1, str2) {
  if (str1.length !== str2.length) {
    console.log(str1.length, str2.length)
    return NaN
  } else {
    let count = 0
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        count++
      }
    }
    return count
  }
}
console.log(hammingDistance('a2c', 'abc'))
function fromPairs(arr) {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    console.log({ ...arr[i] })
    for (let j = 0; j < arr[i].length; j++) {}
  }
  console.log(obj)
}

function fromPairs(arr) {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    arr[i].reduce((prevElement, element) => {
      if (Object.values(obj).includes(prevElement) === false) {
        obj[prevElement] = element
      }
    })
  }
  console.log(obj)
}
let array = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
  ['a', 3]
]

fromPairs(array)

function mergeObjects(obj1, obj2) {
  let obj = {}
  let prevObj = {}
  for (let i = 0; i < arguments.length; i++) {
    obj = { ...obj1, ...obj2, ...arguments[i - 1], ...arguments[i] }
  }

  return obj
}

console.log(mergeObjects({ a: 1, b: 2, c: 3 }, { d: 4 }, { e: 5 }, { f: 6 }))
