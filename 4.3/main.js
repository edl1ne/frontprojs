// 4.3
let birthYear = prompt("Enter your year of birth:");

let city = prompt("In which city do you live?");

let sport = prompt("What`s your favorite sport?");

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

let cityMessage;
if (city === "Kyiv") {
    cityMessage = "You live in the capital of Ukraine.";
} else if (city === "Washington") {
    cityMessage = "You live in the capital of USA.";
} else if (city === "London") {
    cityMessage = "You live in the capital of GB.";
} else {
    cityMessage = `You live in the city ${city}.`;
}

let sportMessage;
if (sport === "Foorball") {
    sportMessage = "Cool! Do you wanna be like Messi?";
} else if (sport === "Basketball") {
    sportMessage = "Cool! Do you wanna be like LeBron James?";
} else if (sport === "Boxing") {
    sportMessage = "Cool! Do you wanna be like Olexander Usyk?";
} else {
    sportMessage = `Cool! You will great in ${sport}. I believe in you`;
}

alert(`Your age: ${age} y.o.\n${cityMessage}\n${sportMessage}`);
