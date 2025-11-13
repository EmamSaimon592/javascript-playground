function greet(name, callback) {
  console.log('Hello ' + name);
  callback(); // এখানে callback function call হচ্ছে
}

function sayBye() {
  console.log('Goodbye!');
}

greet('Imam', sayBye);


