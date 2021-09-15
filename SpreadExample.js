const add = (a, b, c) => {
  return a + b + c; //// Spread Oprator for Function call
};
let args = [1, 2, 3];
console.log(add(...args));

let myArray = [1, 2, 3, 4, 5, 6];
let copyArray = [...myArray, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]; /// Spread Oprator for Expand for Array
console.log("Copying " + copyArray.join(", "));

///// Rest Perameter

const addNumber = (...args) => {
  let addArray = args.reduce((sum, args) => {
    return sum + args;
  }, 0);
  return addArray;
};

let numbers = [1, 2, 3, 4, 5, 6, 7];
let myResult = addNumber(...numbers);
console.log("The result is " + myResult);

//// Spread Oprator for Object

let myObj = { name: "Abhishek", age: "25" };
let newObj = { ...myObj, company: "Tagline Infotech", salary: 5000 };
console.log(newObj);

//// Marge two Arrays

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [8, 9, 10];
//arr1.push(arr2);  /// Using Push method
arr1 = [...arr1, ...arr2, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
console.log("Arrays: " + arr1);
