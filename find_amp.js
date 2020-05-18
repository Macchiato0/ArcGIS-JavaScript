//check amp of every switch
/*
if i in ["200A","300A","500A","100A","600A","1000A","1200","1500A","1600A","2000A","3000A","00A"]

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
