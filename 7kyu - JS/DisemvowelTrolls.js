// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// original
function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const charArr = str.split('');
  const noVowelsArr = charArr.filter(char => !vowels.includes(char.toLowerCase()));
  return noVowelsArr.join('');
}

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

// /[aeiou]/gi: a regular expression (regex) pattern:
// The square brackets []: a character set, matching any single character within the brackets.
// '/' at the beginning and end: denotes the start and end of the regex pattern.
// g flag: makes the search global, it will replace all occurrences, not just the first one.
// i flag: makes the search case-insensitive, it will match both uppercase and lowercase vowels.
// '': replacing the vowels with ''.