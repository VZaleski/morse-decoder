const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
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
};

function decode(expr) {
    function decode(expr) {
        let str = '';
        let intermediate_number = '';
        let i = 0;
        let result = '';
        while(i < expr.length + 2){
            if( i % 10 === 0){
                if( MORSE_TABLE.hasOwnProperty(str) === true){
                   result = `${result}${MORSE_TABLE[str]}`;
                } else if( str === '**********'){
                    result = `${result} `;
                }
                str = '';
            }
            intermediate_number = `${expr[i]}${expr[i + 1]}`;
            if( intermediate_number === '10'){
                str = `${str}.`;
            } else if( intermediate_number === '11'){
                str = `${str}-`;
            } else if( intermediate_number == '**'){
                str = `${str}**`;
            }
            i = i + 2;
        }
        return result;
    }
}

module.exports = {
    decode
}