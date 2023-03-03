const findTheOldest = function(arrInput) {
    const arrOldest = arrInput.sort( (a,b) => {
        let aAge
        let bAge
        const thisYear = new Date().getFullYear()
        //console.log(thisYear)
        if ( !("yearOfDeath" in a) ) {
            aAge = thisYear - a.yearOfBirth
        } else {
            aAge = a.yearOfDeath - a.yearOfBirth
        }

        if ( !("yearOfDeath" in b) ) {
            bAge = thisYear - b.yearOfBirth
        } else {
            bAge = b.yearOfDeath - b.yearOfBirth
        }

        return aAge < bAge ? 1 : -1;
    })
    //console.table(arrOldest)
    return arrOldest[0]
};

// Do not edit below this line
module.exports = findTheOldest;
