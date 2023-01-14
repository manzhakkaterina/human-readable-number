module.exports = function toReadable (number) {
  let arr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hund = '';
  let pust = ' ';
  let str = String(number);
  if (number === 0) {return 'zero';}
  if (str.length === 3) {
	  if ((str[1]+str[2]) === '00') {
	  hund = arr[str[0]]+' hundred';} 
	  else {hund = arr[str[0]]+' hundred ';}
    number = Number(str[1]+str[2]);
    str = String(number);
  }
 if (str[1] === '0') {pust = '';}
  if (number <= 19) { return hund+arr[number]; }
  if (number >= 20 && number <= 29) {  
    return hund+arr[20]+pust+arr[Number(str[1])]; }
  if (number >= 30 && number <= 39) {  
    return hund+arr[21]+pust+arr[Number(str[1])]; }
  if (number >= 40 && number <= 49) {  
    return hund+arr[22]+pust+arr[Number(str[1])]; }
  if (number >= 50 && number <= 59) {  
    return hund+arr[23]+pust+arr[Number(str[1])]; }
  if (number >= 60 && number <= 69) {  
    return hund+arr[24]+pust+arr[Number(str[1])]; }
  if (number >= 70 && number <= 79) {  
    return hund+arr[25]+pust+arr[Number(str[1])]; }
  if (number >= 80 && number <= 89) {  
    return hund+arr[26]+pust+arr[Number(str[1])]; }
  if (number >= 90 && number <= 99) {  
    return hund+arr[27]+pust+arr[Number(str[1])]; }  
}
