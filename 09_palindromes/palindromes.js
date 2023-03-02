const palindromes = function (input) {
    // would normally check if type is string
    // and if it just has one character
    // but this doesn't need that so I won't
    let finalArray = []
    let arrayInput = input.split('')
    let realPos = 0
    for ( let char of arrayInput) {
        if ( char.toUpperCase() != char.toLowerCase() ) {
            finalArray[realPos] = char.toLowerCase()
            realPos++
        }
    }

    //console.table(finalArray)
    //console.log(Math.floor(finalArray.length / 2))

    let i = 0
    while ( i <= Math.floor(finalArray.length / 2) ) {
        //console.log( `${finalArray[i]} vs ${finalArray[finalArray.length - 1 -i]}`)
        if ( finalArray[i] !== finalArray[finalArray.length - 1- i]) {
            return false
        }
        i++
    }

    return true

    

};


// Do not edit below this line
module.exports = palindromes;
