// Code your solutions in this file
// Function to generate thank you cards for each person in the array
function writeCards(namesArray, event) {
    let thankYouCards = [];
    for (let i = 0; i < namesArray.length; i++) {
      thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards;
  }
  
  // Function to count down from a given number to 0
  function countDown(startingNumber) {
    while (startingNumber > 0) {
      console.log(startingNumber); // Print the current number
      startingNumber -= 1; // Decrement the number
    }
    console.log(startingNumber); // Print the final number (0)
  }
  
  // Example usage
  const names = ["Alice", "Bob", "Charlie"];
  const event = "birthday";
  const cards = writeCards(names, event);
  console.log(cards);
  