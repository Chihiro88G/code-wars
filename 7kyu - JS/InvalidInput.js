

// original
function getCount(words) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u']
  
  // if (typeof(words) == 'string' ...
  if (words === undefined || !words || words.length == 0 || Array.isArray(words) || typeof words == 'object') {
    return {    
      vowels: 0,
      consonants: 0
    };
  }
  
  let vCount = 0;
  let cCount = 0;
  
  words.split("").forEach(char => {
    if (char == ' ') return;
    
    if (VOWELS.includes(char.toLowerCase())) {
      vCount++;
      return;
    }
    cCount++;
  })
  
  return {
    vowels: vCount,
    consonants: cCount
  }
}


// someone1
function getCount(words) {
  var totalVowels = 0;
  var totalConsonants = 0;
   
  //TESTING
  if(typeof(words)== "string"){
   
   var searchForVowels = words.match(/[aeiou]/gi);
   var searchForConsonants = words.match(/[^(aeiou\d\s\,\0\W\_)]/gi);
     if(searchForVowels){
       totalVowels = searchForVowels.length;
     }
     if(searchForConsonants){
       totalConsonants = searchForConsonants.length;
     }
  }

  //TESTING END
  //MAKING OBJECT
  var object = {
      vowels:totalVowels,
      consonants:totalConsonants
  }
  //MAKING OBJECT END
  return object;
}

// someone2
function getCount(words) {
  let f = typeof words === 'string';
  return {
    vowels: f ? words.replace(/[^aeiou]/gi,'').length : 0,
    consonants: f ? words.replace(/[^bcdfghjklmnpqrstvwxyz]/gi,'').length : 0
  }
}