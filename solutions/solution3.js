const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function primeNumbers(numberInArray) {
  const extractedPrimes = [];

  for (const num of numberInArray) {
    if (num <= 1) continue; // rejects numbers that are not positive

    let isPrime = true;

    // a number can only be divisible by a prime number that is less than or equal to its square root
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      extractedPrimes.push(num);
    }
  }
  return extractedPrimes;
}

rl.question("Enter numbers separated by spaces: ", function(input) {
  const numberInArray = input.split(" ").map(Number);
  const primeNum = primeNumbers(numberInArray);
  console.log("Prime numbers:", primeNum);
  rl.close();
});
