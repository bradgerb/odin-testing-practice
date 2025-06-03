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

module.exports = { capitalize, reverseString}