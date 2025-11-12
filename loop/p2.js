// reverse a string

let text = "ImamHossain";

let reverse = "";

for (let i = text.length - 1; i >= 0; i--){
  reverse = reverse + text[i];
}
console.log("Reverse:", reverse);
