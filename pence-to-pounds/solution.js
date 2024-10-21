// function convertFromPenceToPounds(pence) {
//   const pounds = pence / 100;
//   return `£${Math.floor(pounds)}`; // Format to two decimal places
// }

const convertFromPenceToPounds = pence => {
//   `£${Math.floor(pence/100)}.${(pence % 100)}`

    const pounds = Math.floor(pence/100);   // Find pounds from hundreds column
    const newPence = pence - pounds*100;    // Find pence from pence - hundreds column
    if (newPence < 10) {          
      return `£${pounds}.0${newPence}`      // If pence is less than 10 e.g. 7, turn it into 07 in £0.07
    } else {
      return `£${pounds}.${newPence}`       // Else keep it the same e.g. 70 --> £0.70
    }
}

module.exports = { convertFromPenceToPounds };

console.log(convertFromPenceToPounds(1299),
convertFromPenceToPounds(100),
convertFromPenceToPounds(7),); // should return "£12.99"
