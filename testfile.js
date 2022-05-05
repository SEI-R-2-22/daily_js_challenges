const { addList } = require("./challenges");

let num = [1,2,3,4,5];
let tool = "tool"
let x = 123

function isPalindrome(str) {
 
      
     let strArray = str.split('').map((x)=> {
        if (x === " "){
          return ""
        }
        return x;
    })
    str = strArray.join('').toUpperCase()
     let rts = strArray.reverse().join('').toUpperCase()

    if(str.length < 2){
      return true
    }

    // console.log(rts," <---RTS")
    // console.log(str," <---STR")

    //  rts === str ? console.log("yeah") : console.log("nahhh")

    if(rts === str){
      return true
    }
    return false

  
}


function hammingDistance(str1, str2) {
  if(str1.length !== str2.length){
    return NaN
  }
  let ham = 0
  str1.split('').map((x, index) => {
      x !== str2[index] ? ham+=1 : ham 
      console.log(`|${x}|${str2[index]}|` ,)   
  });

  return ham
}


function mumble(string) {
  let nString =[]

string.split('').map((x,index)=>{
  for( let i = 0; i < index+1; i++)
  {
    nString.push(x)
  }
  if(index+1 !== string.length){
  nString.push("-")
  }
})

return nString.join('')

}



function fromPairs(arr) {
  let nObj = {}
  for (let i = 0;i < arr.length;i++){
    nObj = { ...nObj,
      [arr[i][0]] : arr[i][1]
    }
  }
return nObj
}


function mergeObjects(...obj) {
  let obj1 = {}
  obj.forEach(element => {
    obj1 = {...obj1, ...element}
  });
  return obj1
}

function findHighestPriced(arr) {
  let index = [0,0]
  arr.forEach((obj,i)=>{
    if(obj.price > index[0] ){
      index[0] = obj.price
      index[1] = i
      // console.log(index)
    }
  })

  // console.log(index[1])
  return arr[index[1]]
}


function mapArray(arr, cb) {
  let newArray = []
  arr.forEach((e,i)=>{
    console.log(e,i,'||||',cb(e,i))
    let x = cb(e,i)
    console.log(x)
    newArray.push(x)
  })
  return newArray
}

function reduceArray(arr, acc, value) {
  let reduce = value
  // let last
  arr.forEach((e,i)=>{
    reduce = acc(reduce,e,i)
    // x += x
    // last = x
    console.log(`in reduce ${x} element${e} index ${i}`)
  })
  return reduce 
}

function toCamelCase(string) {
  let n = string//.split('')
  let x = n.split('')

  // let toSpice=[]
  // // console.log(n.length)
  // for(let i=1;i<n.length;i++){
  //   if(n[i]==='_' || n[i]==='-'){
  //     toSpice.push(i)
  //     i++
  //     n[i] = n[i].toUpperCase()
  //   }
  // }
  while(n.indexOf('_')>=0){
    x[n.indexOf('_')+1] = n[n.indexOf('_')+1].toUpperCase()
    x.splice(n.indexOf('_'),1)
    // console.log(n)
    n = x.join('')
  }
  while(n.indexOf('-')>=0){
    x[n.indexOf('-')+1] = n[n.indexOf('-')+1].toUpperCase()
    x.splice(n.indexOf('-'),1)
    // console.log(n)
    n = x.join('')
  }
  
  // let x = n.join('')
  // return x
  console.log(n)
}



function addChecker(arr, n) {
  for(let i = 0; i < arr.length;i++){
    for (let x = 0; x <arr.length; x++){
      if(arr[i]+arr[x] === n){
        return true
      }
    }
  }
  return false
}

function isPrime(n) {

  if(n === 1){
    return false
  }
  if(n === 2){
    return true
  }
  if(Math.round(n)!== n){
    return false
  }
  for (let i = 2;i < n; i++){
    if(n%i === 0){
      return false
    }
  }
  return true

}

function countTheBits(n) {
  let x = Math.abs(n).toString(2)
  let count = 0
  for (let i = 0; i < x.length; i++){
    if (x[i]==='1'){
      count++
    }
  }
  return count
}
function intersection(arr1, arr2) {
  let x = []
  for (let i = 0; i <arr1.length;i++){
    // console.log(`i = ${i} value = ${arr1[i]} array 2:${arr2}`)

    if(arr2.includes(arr1[i])){
      x.push(arr1[i])
      // console.log(arr2)
      let t = arr2.find((x)=>x===arr1[i])
       arr2.splice(t,1)
      // console.log(arr2)
      // console.log('pushed')
    }

    // for(let n = 0; n< arr2.length;n++){
    //   if(arr1[i] === arr2[n]){
    //     x.push(arr1[i])
    //     console.log(`i = ${i} value = ${arr1[i]} \nn = ${n} value = ${arr2[n]}`)
    //   }
    // }
  }
  return x
}

function flatten(arr) {
  let x = []
  for (i =0;i<arr.length;i++){
    for(n=0;n<arr[i].length;n++){
      x.push(arr[i][n])
    }
    // console.log(`arr[${i}] = ${arr[i]}`)

  }
  return x
}



//console.log(formatWithPadding(123,"x",4));
//ME
// console.log(reduceArray( [1, 2, 3], function(acc, n, i) {
//   return acc + n + i;
// // }, 0))
// console.log(countTheBits(2))
// console.log(countTheBits(3))
// console.log(countTheBits(29))
// console.log(countTheBits(65535))

// console.log(intersection([1], [2]))
// console.log(intersection(['a', 1], []))
// console.log(intersection(['a', 1], [true, 'a', 15]))
// console.log(intersection(['1', 'a', true, 1, 1], [true, 1, 'b', 1]))
// console.log(intersection())

console.log(flatten([1, [2, [3, [4]]], 1, 'a', ['b', 'c']]))