// 10.2
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenArray = originalArray.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenArray); // [2, 4, 6, 8, 10]
