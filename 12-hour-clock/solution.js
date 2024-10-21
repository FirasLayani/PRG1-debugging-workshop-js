function convertTo12HourClock(time) {
  const hours = Number(time.slice(0, 2));   // Converts 07:44 to 7:44
  const minutes = time.slice(-2);
  if (hours > 12) { //Is it after noon?
    return `${hours - 12}:${minutes} PM`; //-12 from hours
  } else if (hours === 12) {
    return `12:${minutes} PM`;   //If 12:XX, keep 12 and say PM
  } else if (hours === 0) {
    return `12:${minutes} AM`;   //If 00:XX, keep 12 and say AM
  } else {
    return `${hours}:${minutes} AM`;
  }
}

module.exports = { convertTo12HourClock };

// Hint: I recommend calling the function with an input of '12:05'
console.log(convertTo12HourClock('16:05'), convertTo12HourClock('08:55'))