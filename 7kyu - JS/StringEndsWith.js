// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false



// original
function solution(str, ending){
  return str.substring(str.length - ending.length, str.length) == ending
}


// someone1
function solution(str, ending){
  return str.endsWith(ending);
}