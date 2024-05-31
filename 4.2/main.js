// 4.2
let number = prompt("Enter three-digits number:");

if (number.length === 3 && !isNaN(number)) {

    let digit1 = number[0];
    let digit2 = number[1];
    let digit3 = number[2];

    let allSame = (digit1 === digit2) && (digit2 === digit3);

    let someSame = (digit1 === digit2) || (digit2 === digit3) || (digit1 === digit3);

    if (allSame) {
        console.log("All digits same");
    } else if (someSame) {
        console.log("Some digits same");
    } else {
        console.log("No digits are the same");
    }
} else {
    console.log("The number is not three-digit");
}
