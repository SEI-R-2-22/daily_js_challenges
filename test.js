let nums = (1,50,1.23)
let newNums = nums.forEach()

function addList(nums) {
    let newNums = parseInt(nums)
    console.log(newNums)
    const sum = newNums.reduce((accumulator, value) => {
        return accumulator + value
      }, 0)
      console.log(sum)

}
