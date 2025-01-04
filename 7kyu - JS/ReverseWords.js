// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  return str.split(" ").map(x=>x.split("").reverse().join("")).join(" ");
}

function practice(str) {
  const arr = str.split(" ");
  [
    'This',
    'is',
    'an',
    'example',
  ]

  return arr.map(word => word.split("").reverse().join("")).join(" ");
}

console.log(practice("This is an example!"))