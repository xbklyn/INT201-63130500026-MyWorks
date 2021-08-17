let arr = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]

function countSheep(arrayOfSheep){
    let count = 0 ;
    for( x in arrayOfSheep){
        count = x ? count+=1 : count;
    }
    return count;
}
let sheep = countSheep(arr);

console.log(`Number of present sheep is ${sheep}`)


let years = [2008,2008,2010,2011,2011,2012,2013,2013,2014,2014,2015,2015,2016,2016,
             2017,2017,2017,2017,2018,2018,2019,2019,2019,2021,2021,2021,2021]

let find_freq = {}

// years.forEach(e => find_freq[e] ? find_freq[e]++ : find_freq[e] = 1);

console.log(find_freq)


