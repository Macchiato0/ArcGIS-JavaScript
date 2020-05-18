//check if input contain a substring 'pos'
/*
if (pos==true){
find "(" [return the index of "("]
find ")" [return the index of ")"]
return the string between "(" and ")"
}

*/

function with_pos(input) {
  var kw="POS"
  var str = String(input);
  var res = str.toUpperCase();
  var boo = res.includes(kw);
  if (boo==true){
  var nf = str.indexOf("(");
  var nt = str.indexOf(")");  
  return str.slice(0, 5); 
  }
  return 0

}
