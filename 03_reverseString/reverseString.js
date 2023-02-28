const reverseString = function(str) {
    let revStr = ''
    for ( let i = str.length; i > 0; i--) {
        revStr += str.slice( i - 1, i)
    }
    return revStr
};

// Do not edit below this line
module.exports = reverseString;
