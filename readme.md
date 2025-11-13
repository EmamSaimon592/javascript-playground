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

# Callback Function Syntax
```
function mainFunction(callback) {
  // মূল কাজ
  console.log("Main function is running...");

  // callback ফাংশন কল করা হচ্ছে
  callback();
}

// এখন callback হিসেবে একটা function পাঠানো হবে:

function myCallback() {
  console.log("Callback function executed!");
}

// callback পাঠানো হলো
mainFunction(myCallback);

```
# setTimeout
```
setTimeout(() => {
  
}, timeout);

```

# promise

const x = new Promise((resolve, reject) => {
  setTimeout(() => {
    
  }, timeout);
});
