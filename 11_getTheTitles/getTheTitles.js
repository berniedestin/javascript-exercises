const getTheTitles = function(arrInput) {
    const arrOutput = []
    arrInput.forEach( element => {
        arrOutput[arrInput.indexOf(element)] = element.title
    })
    return arrOutput
};

// Do not edit below this line
module.exports = getTheTitles;
