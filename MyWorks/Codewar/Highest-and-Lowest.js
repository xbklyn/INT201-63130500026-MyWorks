//! In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    numbers = numbers.split(' ')
                    .sort((a , b ) =>  a - b )
    console.log(numbers);
    return numbers[numbers.length-1] + " " + numbers[0];
  }

  console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));