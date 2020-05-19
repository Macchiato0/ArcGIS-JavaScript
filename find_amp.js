//check amp of every switch
/*
if i in ["200A","300A","500A","100A","600A","1000A","1200","1500A","1600A","2000A","3000A","4000A","5000A"]
return i
*/

function find_amp(input) {
  var kws=["200A","300A","500A","100A","600A","1000A","1200","1500A","1600A","2000A","3000A","4000A","5000A"]
  var str = String(input);
  var res = str.toUpperCase();
  
  for (i = 0; i < kws.length; i++) { 
  var boo = res.includes(i);
  if (boo==true){ 
  return i;}
  }
  return 0
}
