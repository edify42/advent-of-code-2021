const fs = require('fs');

// Calling the readFileSync() method
// to read 'input.txt' file
const data = fs.readFileSync('./input',
            {encoding:'utf8', flag:'r'});

let dataArray = data.split('\n')

const arraySize = dataArray.length;
const halfWay = arraySize/2;

// fixed
const myCounters = new Array(12).fill(0);
const pt1Answer = new Array(12).fill(0);

dataArray.forEach((value,index) => {
  const smol = value.split('')
  // console.log(smol)
  smol.forEach((value, index) => {
    myCounters[index] += Number(value);
  })
  console.log(myCounters)
  if (index + 1 === dataArray.length) {
    console.log('end')
    console.log('pt1 answer')
    myCounters.forEach((value, index) => {
      if (value > halfWay) {
        pt1Answer[index] = 1
      } else {
        pt1Answer[index] = 0
      }
      if (index + 1 === 12) {
        const yo = pt1Answer.join('')
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


// returns 1 or 0 (Number type)
const mostBits = (arr, pos) => {
  let zeroCount = 0;
  let oneCount = 0;
  for (let i=0; i < arr.length; i++) {
    const value = arr[i];
    const split = value.split('')
    console.log(`numero: ${split[pos]}`)
    if (Number(split[pos]) === 0) {
      zeroCount++
    } else {
      oneCount++
    }
  }
  if (zeroCount > oneCount) {
    console.log('keep 0')
    return 0
  }
  console.log(zeroCount)
  console.log(oneCount)
  console.log('keep 1')
  return 1
}

const leastBits = (arr, pos) => {
  let zeroCount = 0;
  let oneCount = 0;
  for (let i=0; i < arr.length; i++) {
    const value = arr[i];
    const split = value.split('')
    if (Number(split[pos]) === 0) {
      zeroCount++
    } else {
      oneCount++
    }
  }
  if (zeroCount <= oneCount) return 0
  return 1
}

// arr = array input, pos = position of bit, bit = 0/1 to keep
const keeper = (arr, pos, bit) => {
  return arr.filter((value, _) => {
    const split = value.split('')
    // console.log(split)
    if (Number(split[pos]) === Number(bit)) return true;
  });
};

console.log('pt2 answer');
let kept = [...dataArray];
console.log(kept)
// might have gotten lucky in that there were no dupes!
for(let i=0; i < dataArray.length; i++){
  if (kept.length === 1) break
  const keep = [...kept] // copy
  kept = [] // empty kept!
  const pos = mostBits(keep, i)
  kept = keeper(keep, i, pos)
  console.log(i)
  console.log(kept)
}

console.log('EOF')
console.log(kept)

// secondPart.forEach((value, index) => {
//   if (value >= halfWay) {
//     pt2Answer[index] = 1
//   } else {
//     pt2Answer[index] = 0
//   }
//   if (index + 1 === 12) {
//     const yo = pt2Answer.join('')
//     console.log(yo)
//     const digit = parseInt(yo, 2);
//     const inverted = (~digit >>> 0).toString(2)
//     const shorten = inverted.substr(20, 12)
//     console.log(shorten)

//     // yo * shorten!
//     console.log(digit * parseInt(shorten, 2))
//   }
// })

// console.log(keeper(['10001'], 0, '1'));