// Square the value of every element in the array. Presume that you will only get numbers in the input array.

// input: const input = [1, 2, 3, 4, 5];
// output: [1, 4, 9, 16, 25];
function func1(arr) {
  return arr.map(num => num * num)
}

// console.log(func1([1, 2, 3, 4, 5]))


// If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.

// input: const input = [1, -4, 12, 0, -3, 29, -150];
// output: 42;

function func2(arr) {
  const positiveNums = arr.filter(num => num > 0);

  return positiveNums.reduce((result, num) => {
    return result + num;
  }, 0)
}

console.log(func2([1, -4, 12, 0, -3, 29, -150]))


function func3(arr) {
  return arr.filter(num => num > 0).reduce((result, num) => {return result + num}, 0)
}

console.log(func3([1, -4, 12, 0, -3, 29, -150]))



// Calculate the mean and median values of the number elements from the input array.

// input: const input = [12, 46, 32, 64];
// output: { mean: 38.5, median: 39 }

function func4(arr) {
  const mean = arr.reduce((acc, num) => { return acc + num }, 0) / arr.length;

  const median = arr.sort((a, b) => a - b).reduce((acc, num, index) => {
    if (arr.length % 2 === 0) {
      // if the array has an even number of elements
      if (index === arr.length / 2 - 1) {
        acc += num;
      } else if (index === arr.length / 2) {
        acc += num;
        acc /= 2;
      }
    } else {
      // if the array has an odd number of elements
      if (index === (arr.length - 1) / 2) {
        acc = num;
      }
    }
    return acc
  }, 0)

  return {
    mean: mean,
    median: median
  }
}

console.log(func4([12, 46, 32, 64]))



// The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.

// input: const input = "George Raymond Richard Martin";
// output: "GRRM";

function func5(str) {
  const capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return str.split(" ").map(item => {
    return item.split('').filter(char => capital.split('').includes(char))
  }).join('')
}

console.log(func5("George Raymond Richard Martin"))


function func6(str) {
  return str.split(" ").map(item => {
    return item.split("")[0]
  }).join('')
}

console.log(func6("George Raymond Richard Martin"))



// Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

// input: const input = [
//   {
//     name: "John",
//     age: 13,
//   },
//   {
//     name: "Mark",
//     age: 56,
//   },
//   {
//     name: "Rachel",
//     age: 45,
//   },
//   {
//     name: "Nate",
//     age: 67,
//   },
//   {
//     name: "Jennifer",
//     age: 65,
//   },
// ];


// output: [13, 67, 54];   [youngest, oldest, (oldest - youngest)]

function func7(arr) {
  const min = Math.min(...arr.map(person => person.age));
  const max = Math.max(...arr.map(person => person.age));
  const difference = max - min;

  return [min, max, difference]
}

console.log(func7([
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
]))


// Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. 
// You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. 
// Words that have less than 4 letters aren't abbreviated, because that would just be odd. 
// The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e

// input: "Every developer likes to mix kubernetes and javascript"
// output: "E3y d7r l3s to mix k8s and j8t"

function func8(str) {
  return str.split(' ').map(word => {
    const charArr = word.split('');

    if (charArr.length < 4) return word;
    return (charArr[0] + (charArr.length - 1 - 1) + charArr[charArr.length - 1]);
  }).join(' ');
}

console.log(func8("Every developer likes to mix kubernetes and javascript"))


// If the given input is a number, you should return the factorial of that number. 
// The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.

// input: 6
// output: 720

function func9(num) {
  let factorial = 1;

  for (let i = 1; i <= num; i++) {
    factorial = factorial * i    
  }

  return factorial;
}

console.log(func9(6))


// other way using array
const array = new Array(input).fill(null);
// array is [null, null, null, null, null, null]

array
  .map(function (currentValue, index) {
    return index + 1;
  })
  .reduce(function (accumulator, currentValue) {
    return accumulator * currentValue;
  });

// or written with Arrow function
new Array(input)
  .fill(null)
  .map((currentValue, index) => index + 1)
  .reduce((accumulator, currentValue) => accumulator * currentValue);



// Count the occurrences of distinct elements in the given 2D array. The given input is an array, the elements of which are arrays of strings. 
// The result is an object whose property names are the values from the arrays and their value is the number of their occurrences.

// input: [
//   ["a", "b", "c"],
//   ["c", "d", "f"],
//   ["d", "f", "g"],
// ];

// output:  {
  //   a: 1,
  //   b: 1,
  //   c: 2,
  //   d: 2,
  //   f: 2,
  //   g: 1,
  // }

function func10(arr) {
  
}