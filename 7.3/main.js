// 7.3 
function getNumberGreaterThan100() {
    let number;
    for (let i = 0; i < 10; i++) {
        number = prompt("Please enter a number greater than 100:", "");
        if (number === null) {
            console.log("User cancelled the prompt.");
            return;
        }
        number = Number(number);
        if (number > 100) {
            console.log(number); 
            return;
        }
    }
    console.log(number); 
}

getNumberGreaterThan100();
