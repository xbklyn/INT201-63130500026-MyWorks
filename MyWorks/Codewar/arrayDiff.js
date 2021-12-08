function arrayDiff(arr1,arr2){
    for (let element of b){
        for(let i in a){
                    if(a.include(element)){
            let index = a.indexOf(element)
            a.splice(index,1);
            }
        }

    }
    return a;


}

// let arr1=[1,2,3,4,5];
// let arr2=[2.,3,4]

// console.log(arrayDiff(arr1,arr2));

let arr = [2, 3, 5, 7]

// arr.map(function(element, index, array){
//     console.log(element);
//     console.log(index);
//     console.log(array);
//     return element;
// }