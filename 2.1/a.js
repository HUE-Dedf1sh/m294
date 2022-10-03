const list = ["A", "B", "C", "D"];

// immutable
const newList = [...list, "E"];
console.log(newList);

// mutable
list.push("E");
console.log(list)

// immutable map to power of 2
const nums = [2, 5, 10, 22, 56, 99];
const numPow2 = nums.map((num) => Math.pow(num, 2));
console.log(numPow2);

const oddNums = nums.filter((num) => num % 2 === 1);
console.log(oddNums)