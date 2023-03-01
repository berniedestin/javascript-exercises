const sumAll = function(numA, numB) {
    // Check if values are numbers
    if ( typeof numA !== 'number' ||
    typeof numB !=='number' ||
    numA < 0 || numB < 0 ) { 
        return "ERROR" 
    }
    // Find greater value, set to new variables
    let numGreat
    let numLess
    if ( numA > numB ) {
        numGreat = numA
        numLess = numB
    } else if ( numA < numB ) {
        numGreat = numB
        numLess = numA
    } else {
        return "ERROR"
    }

    // loop to sum numbers between arguments
    let sumTotal = numLess
    for ( let i = numLess +1; i <= numGreat; i++) {
        sumTotal += i
    }
    return sumTotal
};


// Do not edit below this line
module.exports = sumAll;
