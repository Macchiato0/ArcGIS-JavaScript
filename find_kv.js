/*
find 'kv' in string 
return the word with 'kv'
*/

function find_kv(input) {
  var kw='kv'
  var str = String(input);
  var res = str.toUpperCase();
  var words = res.split(" ");
  
  for (i = 0; i < words.length; i++) { 
  var boo = words[i].includes(kw);
  if (boo==true){ 
       return words[i];}
  }
  return 0
}
