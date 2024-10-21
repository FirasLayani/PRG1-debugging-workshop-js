function drawRightAngledTriangle(n) {
  // let i = 0;
  // while (i < n) {
  //   console.log("#".repeat(i));
  //   i++;
  // }

  for (let i=1; i<=n; i++) {
    console.log('*'.repeat(i))
  }
}

module.exports = { drawRightAngledTriangle };

drawRightAngledTriangle(5)