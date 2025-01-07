// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// original
function XO(str) {
  let xCount = 0;
  let oCount = 0;

  str.toLowerCase().split('').forEach(char => {
    if (char === 'x') xCount++;
    if (char === 'o') oCount++;    
  })
  
return xCount === oCount ? true : false
}


// someone1
const XO1 = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}


// someone2
function XO2(str) {
  console.log(str.toLowerCase().split('x').length)
  // [ '', 'o', 'o' ]

  console.log(str.toLowerCase().split('o').length)
  // [ 'x', 'x', '' ]
  
  return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}


// someone3
function XO3(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

XO2('xoxo');


const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

console.log(str.split('o'))
// [ 'The quick br', 'wn f', 'x jumps ', 'ver the lazy d', 'g.' ]