// *An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// *Implement a function that determines whether a string that contains only letters is an isogram. 
// *Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
    let isIso = true;
    let map1 = new Map();
    arr = String(str).toLowerCase().split("");
    arr.forEach(char => {
        if(map1.has(char)){
            let temp = map1.get(char);
            map1.set(char , parseInt(temp)+1);
            isIso = false;
        }else{
            map1.set(char , 1);
        }
    })
                    
    

    // let arr = String(str).split('')


    let sum;
    let arrN = [ 1 ,2, 3 ,4]
    arrN.forEach(num  => {
        console.log(num);
        sum += num;
    })




    return isIso;
}
console.log(isIsogram('hello'))
console.log(isIsogram('aba'))
console.log(isIsogram('isogram'))
console.log(isIsogram('moOse'));