//// Create Array

let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits[0]);
console.log(fruits[1]); //// Access Array Element in Array index
console.log(fruits[2]);
console.log(fruits[3]); /// it give the value of undefined beacause array index out of bounce

/// Update array value od specifice index

fruits[2] = "Abhishek";
console.log(fruits);

//// Add new Property
fruits[3] = "Fruit";
console.log(fruits);
// let myData = new Array("Abhishek" , "Dubey")
// console.log(myData.length);

//// Array of object

const myData = [
  { id: 1, name: "Abhishek Dubey", technology: "React js" },
  { id: 2, name: "Bhautik Domadiya", technology: "Angular js" },
  { id: 3, name: "Khushi Shurti", technology: "WordPress" },
  { id: 4, name: "Noor Ahemad Natali", technology: "Vie js" },
  { id: 5, name: "Priya Jani", technology: "MERN Stack" },
];

// console.log("MyData Technology is " , myData[1].technology);

//You can use the length of an array to traverse backward and access elements.

console.log(`Length of Array of Object is ${myData.length}`);

let myLength = myData.length;
console.log(myLength);
console.log(`backward traverse: ${myData.length - 1}`);

/// Traverse Array Using For Loop

for (let i = 0; i < myData.length; i++) {
  console.log(`Element at index ${i} is ${JSON.stringify(myData[i])}`);
}

////  forEach loop in js

let Technology = [
  "React Js",
  "Angular Js",
  "Vie Js",
  "Webkit Js",
  "Mozilla Js",
  "Next Js",
];

Technology.forEach((element, index, item) => {
    let  myArray = []
  myArray.push(element)
  // return  console.log(`Element itrate using forEach loop the Element is ${element}`);    /// Because forEach loop Value is return Undefined
  console.log(`{myArray is ${myArray}}`);
   

});



console.log(`myLoopVariable Value is ${Technology}`);
