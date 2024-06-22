// 10.1
const user = {
    name: "Artem Shevchenko",
    age: 23,
    location: "Kyiv, Ukraine",
    
    displayInfo: function() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Location: ${this.location}`);
    }
};

user.displayInfo();
