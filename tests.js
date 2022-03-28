function formatWithPadding(n, char, length) {
  let string = ''
  let filler = length - n.toString().length
  console.log(n.toString())
  for (let i = 0; i < filler; i++) {
    string += char
  }
  string += n
  console.log(string)
}

formatWithPadding(123, '0', 10)
