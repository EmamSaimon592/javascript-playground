// Count Vowels in a String
let str = 'Imam Hossain Saimon';
let count = 0;
const vowels = 'aeiouAEIOU';

for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    count++;
  }
}

console.log('Vowel Count:', count);
