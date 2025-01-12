// 1
const numbers = [1, 2, 3, 4, 5];

const max1 = Math.max(numbers);
console.log(max1);  // => NaN

const max2 = Math.max(...numbers);
console.log(max2);  // => 5


// 2
const userName = 'user name something';

const letters1 = [userName];
console.log(letters1)
// => [ 'user name something' ]
console.log(letters1.join(' '))
// => user name something

const letters2 = [...userName];
console.log(letters2)
// => [
//   'u', 's', 'e', 'r', ' ',
//   'n', 'a', 'm', 'e', ' ',
//   's', 'o', 'm', 'e', 't',
//   'h', 'i', 'n', 'g'
// ]
console.log(letters2.join(''))
// => user name something


const number = 123456;

const numArr1 = [number.toString()];
console.log(numArr1);
// [ '123456' ]

const numArr2 = [...number.toString()];
console.log(numArr2);
// [ '1', '2', '3', '4', '5', '6' ]


// 3
const fruits = ['apple', 'pinapple', 'grapes'];
const veggies = ['onion', 'potatos', 'carrots'];

const foods = [...fruits, ...veggies, 'fish', 'pork'];

console.log(foods);
// [
//   'apple',   'pinapple',
//   'grapes',  'onion',
//   'potatos', 'carrots',
//   'fish',    'pork'
// ]