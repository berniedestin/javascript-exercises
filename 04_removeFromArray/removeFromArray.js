const removeFromArray = function() {
    let testArray = arguments[0]
    //console.log("initial " + testArray)
    for ( let i = 1; i < arguments.length; i++) {
        // for ( const extract of testArray) {
        for ( let j = 0; j < testArray.length; j++) {
            //console.log("inside j loop " + testArray)
            if ( testArray[j] === arguments[i]) {
                testArray.splice(j,1)
                //console.log("inside if " + testArray)
            }
        }
    }
    return testArray
};

// Do not edit below this line
module.exports = removeFromArray;
