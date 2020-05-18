//check if input contain a substring 'switch'
function within(input) {
  var kws=["SWITCH","AIRBREAK","AIR BREAK","SW","DISC","LOADBREAK","LOAD BREAK","ABS"]
  var str = String(input);
  var res = str.toUpperCase();

  for (i = 0; i < kws.length; i++) {
  var n = res.includes(kws[i]);
  if (n == true) {
  return "SWITCH";
}
 
}
  return '0'
}
