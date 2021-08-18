//? Code needs to be solved.
decodeMorse = function(morseCode){
    const ref = { 
        ' ':      '',
        '.-':     'A',
        '-...':   'B',
        '-.-.':   'C',
        '-..':    'D',
        '.':      'E',
        '..-.':   'F',
        '--.':    'G',
        '....':   'H',
        '..':     'I',
        '.---':   'J',
        '-.-':    'K',
        '.-..':   'L',
        '--':     'M',
        '-.':     'N',
        '---':    'O',
        '.--.':   'P',
        '--.-':   'Q',
        '.-.':    'R',
        '...':    'S',
        '-':      'T',
        '..-':    'U',
        '...-':   'V',
        '.--':    'W',
        '-..-':   'X',
        '-.--':   'Y',
        '--..':   'Z',
        '.----':  '1',
        '..---':  '2',
        '...--':  '3',
        '....-':  '4',
        '.....':  '5',
        '-....':  '6',
        '--...':  '7',
        '---..':  '8',
        '----.':  '9',
        '-----':  '0',
        "-.-.--": '!',
        ".-.-.-": '.',
        "--..--": ',',
        "...---...": 'SOS'
  }
console.log(morseCode.trim().split('   '));
  let ans = morseCode.split('   ')
                  .map(
                      a => a.split(' ')
                            .map(
                                b => ref[b]
                            ).join('')
                  ).join(' ')
                  
    console.log(ans)
    return ans.trim();
}
console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
console.log(decodeMorse('   .   . '));
console.log(decodeMorse('... --- ...'));
console.log(decodeMorse("      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-"));

console.log(MORSE_CODE['...---...'])