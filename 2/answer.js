const fs = require('fs');

// Calling the readFileSync() method
// to read 'input.txt' file
const data = fs.readFileSync('./input',
            {encoding:'utf8', flag:'r'});


let dataArray = data.split('\n')

console.log(dataArray)

let forward = 0;
let aim = 0;
let depth = 0;
dataArray.forEach((input, index) => {
if (input.includes('forward')) {
  const inc = Number(input.split(' ')[1])
  forward += inc;
  depth = depth + inc * aim;
  console.log(`forward: ${forward}`)
  console.log(`depth: ${depth}`)
  return
} else if (input.includes('down')) {
  const inc = Number(input.split(' ')[1])
  aim += inc;
  console.log(`aim: ${aim}`)
} else {
  const inc = Number(input.split(' ')[1])
  aim -= inc;
  console.log(`aim: ${aim}`)
}
});