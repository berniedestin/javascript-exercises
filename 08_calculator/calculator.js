const add = function(numA,numB) {
	return numA + numB
};

const subtract = function(numA,numB) {
	return numA - numB
};

const sum = function(array) {
  //if ( array.length == 0) return 0; unnecessary
  let sum = 0
  array.forEach( num => {
    sum += num
  })
  return sum
};

const multiply = function(array) {
  let ans = 1
  array.forEach( num => {
    ans *= num
  })
  return ans
};

const power = function(num,pow) {
  let ans = num
  for ( let i = 1; i < pow; i++) {
    ans *= num
  }
	return ans
};

const factorial = function(num) {
  if (num === 0 ) {
    return 1
  } else {
    let ans = num
    for ( let i = 1; i < num; i++) {
      ans *= i
      }
	  return ans
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
