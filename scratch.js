//formatWithPadding(123, "0", 5); //=> "00123"

let n = 22;
let char = "*";
let length = 5;

n = n.toString();
let diff = length - n.length;

if (diff >= 0) {
  for (let i = 0; i < diff; i++) {
    n = `${char}` + n;
  }
}
console.log(n);
