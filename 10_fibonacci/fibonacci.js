const fibonacci = function(input) {
    if ( input < 1) return "OOPS"
    var array = []
    for ( let i = 0; i < input; i++) {
        if ( i === 0 ) {
            array[0] = 1
        } else if ( i === 1) {
            array[1] = 1
        } else {
            array[i] = array[ i - 1 ] + array[ i - 2 ]
        }
    }
    return array[input - 1 ]
};

// Do not edit below this line
module.exports = fibonacci;
