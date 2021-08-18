// Your task is to make a function that can take any non-negative integer as an argument 
// and return it with its digits in descending order. Essentially, rearrange the digits 
// to create the highest possible number.

function descendingOrder(n){
    let arrN = [],
    sNum = n.toString();

    for(let i = 0 ; i < sNum.length; i++){
        arrN.push(sNum.charAt(i));
    }

    arrN.sort((a, b) => b - a);
    let num = ``;
    for(let i = 0 ; i < arrN.length; i++){
        num += arrN[i];
    }

    return parseInt(num);
  }

//The better way to do descending order 
  function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }