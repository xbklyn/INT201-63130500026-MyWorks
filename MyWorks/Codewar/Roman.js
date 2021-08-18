function convert(n) {
    if (n == 'I') {
      n = 1;
    } else if (n == 'V') {
      n = 5;
    } else if (n == 'X') {
      n = 10;
    } else if (n == 'L') {
      n = 50;
    } else if (n == 'C') {
      n = 100;
    } else if (n == 'D'){
        n = 500;
    } else if(n == 'M'){
        n = 1000;
    }
    return n;
  }

function romanConvert(s){
    s = s.split('').map(convert);
    console.log(s);
    let rs = 0 ;
    for(let i = 0 ; i < s.length ; i ++){
        if(s[i] < s[i+1]){
            rs += (s[i+1]) - s[i];
            i++;
        }else{
            rs += s[i];
        }
    }
    return rs;
}

console.log(romanConvert('I'));
console.log(romanConvert('II'));
console.log(romanConvert('III'));
console.log(romanConvert('IV'));
console.log(romanConvert('V'));
console.log(romanConvert('VI'));
console.log(romanConvert('VII'));
console.log(romanConvert('VIII'));
console.log(romanConvert('IX'));
console.log(romanConvert('X'));
console.log(romanConvert('XI'));
console.log(romanConvert('XII'));
console.log(romanConvert('XIII'));
console.log(romanConvert('XIV'));
console.log(romanConvert('XV'));
console.log(romanConvert('XVI'));
console.log(romanConvert('XVII'));
console.log(romanConvert('XVIII'));
console.log(romanConvert('XIX'));
console.log(romanConvert('XX'));