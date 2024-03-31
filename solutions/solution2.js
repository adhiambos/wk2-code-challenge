const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Question 2
function generateArray(start, end) {
  const direction = start < end ? 1 : -1; // determines the direction of counting in array
  const step = direction; // assign the step value to direction

  const arrayOutput = []; // the array result

  for (let i = start; i !== end; i += step) {
    arrayOutput.push(i); // generating the array
  }
  // the end number in the array
  arrayOutput.push(end);

  return arrayOutput;
}

// Prompt the user for start and end values
readline.question('Enter the starting number: ', (startInput) => {
  readline.question('Enter the ending number: ', (endInput) => {
    readline.close();

    const start = Number(startInput);
    const end = Number(endInput);

    const generatedArray = generateArray(start, end);
    console.log("Generated array:", generatedArray);
  });
});
