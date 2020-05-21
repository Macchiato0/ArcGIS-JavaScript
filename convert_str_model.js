/*
find 'model' in string array
return the matched result
*/

function find_model(input) {
  var kw1=["1LC-69", "AGA", "AGA-2", "AGAL-2", "AGCH4V", "AGCH5V", "AGCHV", "AGT22", "ALD-RUP", "B-2K", "B-2L", "B-2M", "B-2P", "BG-20", "CBL-T", "CSH-B", "DR-5", "EV-1", "EV-2", "FB-2K", "FB-2M", "FB-2P", "FB-2P-R", "FPM-40A", "GEN-IPP", "GEN-MCV", "H-1", "HM-50", "HMKR-40A", "HP3", "MARK II", "MARK III", "MARK V", "MARK V-NO IN", "MB 139", "MK 39", "MK 40", "MK 40A", "MKR 40", "MKR 40A", "PB-40", "PM-40A", "PV-3", "PVH", "RDA-1", "RF-2", "SF-1", "SMD-20", "TA1", "TTR49", "TTR6", "TTR8", "TTT5", "TTT7", "TTT-US", "V2-LB", "VRT 426"]
  var kw2=["69", "AGA", "AGA", "AGA", "AGCH", "AGCH", "AGCH", "AGT", "ALD", "B2", "B2", "B2", "B2", "BG", "CBLT", "CSH", "DR5", "EV1", "EV2", "FB2", "FB2", "FB2", "FB2", "FPM", "GEN", "GEN", "H1", "HM50", "HMK", "HP", "MARK", "MARK", "MARK", "MARK", "MB", "MK", "MK", "MK", "MK", "MK", "PB", "PM", "PV", "PV", "RDA", "RF", "SF", "SMD", "TA-1", "TTR", "TTR", "TTR", "TTT", "TTT", "TTT", "V2", "VRT"] 
  var str = String(input);
  var res = str.toUpperCase();
  # var words = res.split(" ");
  for (i = 0; i < kw1.length; i++)
  { 
  var boo = res.includes(kw1[i]);
  if (boo==true){ 
       return kw2[i];}
  }
  return res
}
