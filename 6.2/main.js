//6.2
function averageOfNumbers(arr) {
    const numericElements = arr.filter(x => typeof x === 'number');
    
    if (numericElements.length === 0) {
        return 0; 
    }
    
    const sum = numericElements.reduce((acc, num) => acc + num, 0);
    const average = sum / numericElements.length;
    
    return average;
}

const array = [24, "hello", 30, 2.3, "world", 40];
console.log(averageOfNumbers(array)); 
