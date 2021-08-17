// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
// If it is the case we will return k, if not return -1.
// Note: n and p will always be given as strictly positive integers.

function digPow(n, p){
    sNum = n.toString();
    let arrN = [];

    for(let i = 0 ; i < sNum.length; i++){
        arrN.push(sNum.charAt(i))
    }

    let digPowArr = [];
    arrN.forEach(element => {
        element = Math.pow(element,p++);
        digPowArr.push(element);
    });

    let sum = 0;
    digPowArr.forEach(a => {
        sum += a;
    });
    let result = Number.isInteger(sum / n) ? sum / n : -1 ;
    return result;
  }

  console.log(digPow(89,1));
  console.log(digPow(92,1));
  console.log(digPow(46288,3));


  //or
  //The better way to solve this solution 
  function digPow(num, pow) {
  const raisedAndSummed = num.toString()
                             .split('')
                             .map(n => Math.pow(n, pow++))
                             .reduce((sum, n) => sum + n, 0)
  return (raisedAndSummed % num === 0) ? raisedAndSummed / num : -1
}
