const fs = require('fs');

// Calling the readFileSync() method
// to read 'input.txt' file
const data = fs.readFileSync('./input',
            {encoding:'utf8', flag:'r'});

let dataArray = data.split('\n')

console.log(dataArray)

// first element is the DRAW
const draw = dataArray[0].split(',')

const allMatrix = [];
let tmpMatrix = [];
let rowCount = 0;
let matrixCount = 0;

// cleaner will turn our string input to an array of Numbers.
const cleaner = (input) => {
  const answer = [];
  const dummy = input.trim().split(' ');
  const arr = dummy.filter((a) => a);
  // console.log(arr)
  for (i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === ' ') continue; // blanks...
    answer.push(Number(element))
  };
  return answer;
}

// skip the first empty line and go straight to populating 5x5 array.
for (let i=2; i < dataArray.length; i++) {
  if (dataArray[i] === '') {
    console.log('blank line - skipping...')
    continue // handle blank lines by skipping
  }
  const cleanRow = cleaner(dataArray[i]);
  tmpMatrix[rowCount] = cleanRow;
  if (rowCount === 4) {
    allMatrix[matrixCount] = tmpMatrix;
    matrixCount++;
    rowCount = 0;
    tmpMatrix = [];
  } else {
    rowCount++
  }
}

// ok we have our matrix setup.
console.log(allMatrix)

// answer time!
// checkMatrix will take the matrix + array of numbers
const checkMatrix = (matrix, bingoList) => {
  let columnTransform = [...Array(5)].map(e => Array(5));
  // check rows
  for (let i=0; i<5; i++) {
    const row = matrix[i]
    if (checkList(row, bingoList)) return true;
    // console.log(matrix)
    // populate columns
    for (let j=0; j<5; j++) {
      columnTransform[j][i] = row[j]
    }
  }
  // check columns
  for (let i=0; i<4; i++) {
    if (checkList(columnTransform[i], bingoList)) return true;
    // populate columns
  }

  return false;
};

// true/false match if all 
const checkList = (input, bingo) => {
  console.log('try this line')
  // console.log(bingo)
  // console.log(input)
  return input.every(elem => bingo.includes(elem))
};


// loop from 4 as we need min 5 numbers before match.
for (let i=4; i < draw.length; i++) {
  const search = draw.slice(0, i).map(function(item) {
    return parseInt(item, 10);
});
  console.log(i)
  for (let j=0; j < allMatrix.length; j++) {
    const answer = checkMatrix(allMatrix[j], search)
    if (answer) {
      console.log('found')
      const flat = allMatrix[j].flat()
      const missed = flat.filter(elem => !search.includes(elem))
      console.log('missing numbers:')
      console.log(missed)
      
      console.log(search[search.length-1])
      process.exit(0)
    }
  }
};
