// 9.1
let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function calculateSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((total, employee) => total + employee.salary, 0);
    } else {
        return Object.values(department).reduce((total, subDept) => total + calculateSalaries(subDept), 0);
    }
}

let totalSalaries = calculateSalaries(company);
console.log(totalSalaries); // 6700
