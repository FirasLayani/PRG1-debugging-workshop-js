function countChar(string, char) {
  let i = 0;
  let count = 0;
  do {
    if ((string[i] === char)) {
      count+=1;
    }
  i++;  
  } while (i < string.length);

  // let count = 0;
  // for (let i=0; i<string.length;i++) {

  //   if (string[i] === char) {
  //     count += 1
  //   }
  // }

  return count;
}

module.exports = { countChar };

console.log(countChar('Hello there!', 'l'))