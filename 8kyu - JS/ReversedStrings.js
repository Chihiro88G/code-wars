// Complete the solution so that it reverses the string passed into it.

function solution(str){
  return str.split('').reverse().join('');  
}

// original...
function solution(s){
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}