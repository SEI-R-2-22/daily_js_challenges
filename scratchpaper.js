function flatten(arr) {
  flat_array = []
    // if (arr.length>0) {
    for(let i = 0; i<arr.length; i++) {
      let newValue = arr.shift()
      if (newValue.typeOf == 'number') {
        flatten(arr)
      }
      console.log(newValue)
      flat_array.push(newValue)
    }
  }
//   console.log(flat_array)
// }


flatten( [1, [2, 3]] );
//=> [1, 2, 3]  (a new array) 

// flatten( [1, [2, [3, [4]]], 1, 'a', ['b', 'c']] );
// //=> [1, 2, 3, 4, 1, 'a', 'b', 'c']