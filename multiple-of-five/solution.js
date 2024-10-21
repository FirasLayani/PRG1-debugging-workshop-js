function getLastDigit(num) {
  return num.toString().slice(-1);
}

function isMultipleOfFive(n) {
  console.log("The value of n -->", n);
  if (getLastDigit(n) === 5 || getLastDigit(n) === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = { isMultipleOfFive };


console.log(getLastDigit(12))
