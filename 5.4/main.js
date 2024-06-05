//5.4
const number = parseInt(prompt("Enter integer: "), 10);

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

if (isNaN(number)) {
  console.log("The value entered is not a number");
} else {
  if (isPrime(number)) {
    console.log(`${number} is a prime number`);
  } else {
    console.log(`${number} is not a prime number`);
  }
}
