function sumDigits(num) {
  // let sum = 0;
  // while (num > 0) {
  //   sum += num % 10;
  //   num--;
  // }
  // return sum;

  let sum = 0;
  for (let i=0; i<String(num).length; i++) {
    sum += Number(String(num)[i]) //Turn number to string, get its i'th digit, turn it into a number and add it to the sum
  }
  return sum
}

module.exports = { sumDigits };

console.log(sumDigits(123))
