// function flatten(arr) {
//   let newArray = []
//   function spread(array) {
//     array.forEach((el) => {
//       Array.isArray(el) ? newArray.concat(spread(el)) : newArray.push(el)
//     })
//     console.log('hi')
//     return newArray
//   }
//   spread(arr)
// }

function flatten(arr) {
  var flatArr = []
  arr.forEach(function (elem) {
    // use the Array.isArray static method to test if an array
    if (Array.isArray(elem)) {
      flatArr = flatArr.concat(flatten(elem))
    } else {
      flatArr.push(elem)
    }
  })
  return flatArr
  console.log(flatArr)
}

flatten([1, [2, 3]])
