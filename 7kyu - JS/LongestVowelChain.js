// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!


// original
function solve(s){
  const vowels = 'aeiou';
  let maxLength = 0;
  let currentLength = 0;

  for (let char of s) {
    console.log(char)
    if (vowels.includes(char)) {
      currentLength++;
      maxLength = Math.max(maxLength, currentLength);
    } else {
      currentLength = 0;
    }
  }

  return maxLength;
}

// ex.1
const solve = s => s.split(/[^aeiou]/).reduce((s,n)=> Math.max(s,n.length),0);

// ex.2
function solve(s){
  return Math.max(...s.match(/[aeiou]+/g).map(x => x.length));
 }