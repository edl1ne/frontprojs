// 3.1
let stringType = "string";
let numberType = 42;
let booleanType = true;
let undefinedType;
let nullType = null;
let objectType = { name: "Artem", age: 23 };
let arrayType = [1, 2, 3, 4, 5];
let functionType = function() { return "I am a function"; };
let symbolType = Symbol("symbol");
let bigintType = BigInt(1234567890123456789012345678901234567890n);

console.log("Тип stringType: " + typeof stringType); // string
console.log("Тип numberType: " + typeof numberType); // number
console.log("Тип booleanType: " + typeof booleanType); // boolean
console.log("Тип undefinedType: " + typeof undefinedType); // undefined
console.log("Тип nullType: " + typeof nullType); // object 
console.log("Тип objectType: " + typeof objectType); // object
console.log("Тип arrayType: " + typeof arrayType); // object 
console.log("Тип functionType: " + typeof functionType); // function
console.log("Тип symbolType: " + typeof symbolType); // symbol
console.log("Тип bigintType: " + typeof bigintType); // bigint
