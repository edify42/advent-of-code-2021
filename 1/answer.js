const { count } = require('console');
const fs = require('fs');

const countBigger = (input) => {
  let counter = 0
  for(let i=1; i < input.length; i++){
    const previousValue = input[i-1]
    if (Number(input[i]) > Number(previousValue)){
      counter++
    }
  }
  return counter
}

const threeSum = (input) => {
  const myArr = []
  for(let i=0; i+2 < input.length; i++){
    const oneAhead = input[i+1]
    const twoAhead = input[i+2]
    myArr.push(Number(input[i]) + Number(oneAhead) + Number(twoAhead))
  }
  return myArr
}  
// Calling the readFileSync() method
// to read 'input.txt' file
const data = fs.readFileSync('./input',
            {encoding:'utf8', flag:'r'});
 

let dataArray = data.split('\n')

console.log(countBigger(dataArray))

const sumThree = threeSum(dataArray)
console.log(sumThree)

console.log(countBigger(sumThree))