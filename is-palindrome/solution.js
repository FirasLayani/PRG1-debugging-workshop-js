function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right++;
  }

  return true;
}

module.exports = { isPalindrome };

console.log(isPalindrome("racecar")); // should return true
