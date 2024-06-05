//5.2
const dollarUan = 26; 

for (let dollars = 10; dollars <= 100; dollars += 10) {
  let costInUan = dollars * dollarUan;
  console.log(`${dollars} dollars cost ${costInUan} uan`);
}