// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    let arr = Array.from(l);
    console.log(arr);
    for(let i  = 0; arr.length; i++ ){
        console.log(arr);
        if(typeof arr[i] !== 'number') arr.slice(i,i);
    }

    console.log(arr);



}

filter_list([1,2,'a','b']);