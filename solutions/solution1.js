const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Question 1

function characterSwap(stng) {
  // split the string into an array of characters
  const charct = stng.split("");

// loop and swap the case of each character
  for (let i = 0; i < charct.length; i++) {
    const swapChar = charct[i];
    charct[i] = swapChar === swapChar.toLowerCase() ? swapChar.toUpperCase() : swapChar.toLowerCase();
  }
  // Join the characters back into a string
  return charct.join("");
}

rl.question("Enter a string: ", function(input) {
  const output = characterSwap(input);
  console.log("Swapped case string:", output);
  rl.close();
});
