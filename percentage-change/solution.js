// function calculatePercentageChange(original, newAmount) {
//   const difference = Math.abs(newAmount - original);
//   const average = (original - newAmount) / 2;
//   const percentageDifference = (average / difference) * 100;
//   return percentageDifference.toFixed(2);
// }

// Return the percentage change between the original and new numbers. If the original is 0, return 0
const calculatePercentageChange = (original, newAmount) => {
  return original == 0 ? 0 : Math.round((newAmount-original)/original*100)
}

module.exports = { calculatePercentageChange };

console.log(calculatePercentageChange(0,0)); // should return -20 as there's been a 20% decrease from 50 to 40