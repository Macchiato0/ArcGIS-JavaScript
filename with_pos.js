//check if input contain a substring 'pos'
function within(input) {
  var kw="POS"
  var str = String(input);
  var res = str.toUpperCase();
  var n = res.includes(kw);
  if (n == true) {
  return "SWITCH";
}
 
  return '0'
}
