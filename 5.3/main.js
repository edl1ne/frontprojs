//5.3
const N = parseInt(prompt("Enter integer N: "), 10);

if (isNaN(N)) {
  console.log("The value entered is not a number");
} else {
  for (let i = 1; i <= 100; i++) {
    if (i * i <= N) {
      console.log(i);
    }
  }
}
