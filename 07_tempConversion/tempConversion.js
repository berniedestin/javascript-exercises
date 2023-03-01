const convertToCelsius = function(tempInput) {
  let tempToCelsius = (( tempInput - 32 ) * (5 / 9))
  return Math.round(tempToCelsius * 10) / 10
};

const convertToFahrenheit = function(tempInput) {
  let tempToFahrenheit = ((tempInput * (9 / 5)) +32)
  return Math.round(tempToFahrenheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
