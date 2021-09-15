/// ES6 Destructuring Assignment
function getScores(){
    return [10, 20 , 30 , 40 , 50 , 60 , 70 , 80 , 100 , 101 , 102 , 103 ]
}
// let scores = getScores();
// console.log(scores);

// to access individual scores using treditionl way to access array element indexes
// let x = scores[0];
// let y = scores[1];
// let z = scores[2];
// console.log(x ,y , z);

/// the new ES6 Feature to access array element esaly using Destructuring they store every element in individual variable
// let [x, y, z] = getScores();
// console.log(x);  // output 10
// console.log(y);  // output 20

//// Array Destructuring using Rest Syntax

let [x, y, z , ...args] = getScores();
console.log(x);
console.log(y);
console.log(z);
console.log(`the remaning value of Array is ${args}`);

/// setting default

// function getItems() {
//     return null ;
// }

// let items = getItems();
// // let thirdItem = items[3] !== undefined ? items[3] : 0;     assign third value using check ternory oprator
// // console.log(thirdItem);

/// set the value using Destructuring assignment
// let [x=40 , y=50, thirdItem = 0] = getItems() || [];
// console.log(x);
// console.log(y);
// console.log(thirdItem);

// Nested Array Destructuring assignment
// function getProfile() {
//   return ["John", "Doe", ["Red", "Green", "Blue"]];
// }

// let [firstName, lastName, [color1, color2, color3]] = getProfile();

// console.log(color1, color2, color3); // Red Green Blue


// Skipping item in the array destructuring assignment

let myArray = ["Abhishek" , "Alamat" , "Alamat2" ,"KGF" , "KGF2" , "KGF3" ,]

let [val1 , , , , var2 , ] = myArray;
console.log(`The Value of ${val1} and ${var2}`);

