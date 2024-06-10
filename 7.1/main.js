// 7.1
function createSum() {
    let total = 0; 
    return function(num) {
        total += num; 
        return total; 
    };
}

const sum = createSum(); 

console.log(sum(7)); // 7
console.log(sum(34)); // 41
console.log(sum(23)); // 64
console.log(sum(54)); // 118
