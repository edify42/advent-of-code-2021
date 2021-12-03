const fs = require('fs');

// Calling the readFileSync() method
// to read 'input.txt' file
const data = fs.readFileSync('./input',
            {encoding:'utf8', flag:'r'});

let dataArray = data.split('\n')

const arraySize = dataArray.length;
const halfWay = arraySize/2;

// fixed
const myCounters = [0,0,0,0,0,0,0,0,0,0,0,0];

dataArray.forEach((value,index) => {
  const smol = value.split('')
  console.log(smol)
  smol.forEach((value, index) => {
    myCounters[index] += Number(value);
  })
  console.log(myCounters)
  if (index + 1 === dataArray.length) {
    console.log('end')
    myCounters.forEach((value, index) => {
      if (value > halfWay) {
        myCounters[index] = 1
      } else {
        myCounters[index] = 0
      }
      if (index + 1 === 12) {
        const yo = myCounters.join('')
        console.log(yo)
        const digit = parseInt(yo, 2);
        const inverted = (~digit >>> 0).toString(2)
        const shorten = inverted.substr(20, 12)
        console.log(shorten)

        // yo * shorten!
        console.log(digit * parseInt(shorten, 2))
      }
    })
  }
})
