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
  let arrExpr = Array.from(expr);
  let newArr = [];
  for (let i = 0; i < arrExpr.length; i+=10) {
    const part = arrExpr.slice(i, i + 10);
    newArr.push(part);
  }
  let longArr = newArr.map(function(elem){
    let newArrSub = [];
    for (let j = 0; j < elem.length; j+=2) {
      const partSub = elem.slice(j, j + 2);
      newArrSub.push(partSub.join(''));
    }
    return(newArrSub);
  });
  let arr = longArr.map(function(subElement){
    let arrSub = [];
    for (let l = 0; l < subElement.length; l++) {
      if (subElement[l] === '00') {arrSub[l] = ''}
      else {
        if (subElement[l] === '10') {arrSub[l] = '.'}
        else {
          if (subElement[l] === '11') {arrSub[l] = '-'} else {arrSub[l] = '*'}
        }
      }
    }
    return(arrSub.join(''));
  });
  let res = arr.map(function(prop){
    if (prop == '*****') {prop = ' '}
    for (let key in MORSE_TABLE) {
      if (prop==key) {prop = MORSE_TABLE[key]};
    }
    return(prop);
  });
  return(res.join(''));  // write your solution here
}

module.exports = {
    decode
}