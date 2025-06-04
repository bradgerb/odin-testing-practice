function capitalize(string) {   
    let firstLetter = string.charAt(0).toUpperCase();
    let restOfString = string.slice(1);
    let answer = firstLetter.concat(restOfString);
    return answer;
}

function reverseString(string) {
    let reversedString = '';
    for(let i = 0; i <= string.length; i++){ 
        reversedString += string.charAt(string.length - i);
    }
    return reversedString
}

const calculator = { 
    add(a, b) {
        return a + b
    },
    subtract(a, b) {
        return a - b
    }, 
    multiply(a, b) {
        return a * b
    },
    divide(a, b) {
        return a / b
    }
 }

 function caesarCipher(string, shiftFactor) {
    let cipherString = '';
    let lowerCaseString = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for(let i = 0; i < string.length; i++) {
        if (alphabet.includes(lowerCaseString.charAt(i))) {
            if(string.charAt(i) === lowerCaseString.charAt(i)) {
                cipherString += String.fromCharCode(charCodeWrapValue(lowerCaseString.charAt(i), shiftFactor));
            } else {
                cipherString += String.fromCharCode(charCodeWrapValue(lowerCaseString.charAt(i), shiftFactor)).toUpperCase();
            }
        } else {
            cipherString += string.charAt(i);
        }
    }
    return cipherString
 }

 function charCodeWrapValue(char, shift) {
    let zeroedChar = char.charCodeAt(0) - 97;
    let shiftedChar = zeroedChar + shift;
    let zeroedShiftedChar = shiftedChar % 26

    return zeroedShiftedChar + 97
 }

function analyzeArray(array) {
    let arrayValues = {};
    let sum = 0;
    let min = null;
    let max = null;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];

        if (min > array[i] || min === null) {
            min = array[i]
        }

        if (max < array[i] || max === null) {
            max = array[i]
        }
    }

    arrayValues.length = array.length
    arrayValues.average = sum /  array.length;
    arrayValues.min = min;
    arrayValues.max = max;
    
    return arrayValues
}

module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeArray }