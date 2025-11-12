# Ternary Operator (? :)
 Use (? :) (ternary) as a shorthand for if...else.
 Example
 
```
condition ? expression1 : expression2
```

# for loop in js
### while Loop
```
let count = 1;
while (count <= 5) {
  console.log("Count:", count);
  count++;
}

```
### do...while Loop
```
let i = 1;
do {
  console.log("Value:", i);
  i++;
} while (i <= 3);

```
### for...of Loop (ES6+)
Used for arrays, strings, sets, etc.
```
const fruits = ["apple", "banana", "mango"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

### for...in Loop
Used for objects (to get keys).

```
const person = { name: "Imam", age: 22, city: "Chittagong" };

for (const key in person) {
  console.log(key, ":", person[key]);
}

```