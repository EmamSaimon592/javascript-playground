// Find Maximum Number in an Array

const numbers = [10, 25, 7, 99, 3];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log('Max number:', max);
