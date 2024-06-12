// 7.3 
function getNumberGreaterThan100() {
    let number;
    for (let i = 0; i < 10; i++) {
        let input = prompt("Please enter a number greater than 100:", "");
        if (input === null) {
            console.log("User cancelled the prompt.");
            return;
        }
        number = Number(input);
        if (isNaN(number)) {
            console.log("Invalid input. Please enter a number greater than 100.");
        } else if (number > 100) {
            console.log(number);
            return;
        } else {
            console.log("The number is not greater than 100. Please try again.");
        }
    }
    console.log("Failed to get a number greater than 100 after 10 attempts.");
}

getNumberGreaterThan100();