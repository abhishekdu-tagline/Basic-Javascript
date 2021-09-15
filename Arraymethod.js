// push() method add element in the end of the Array

//example
// const myData = ["Abhishek Dubey" , 25 , "Tegline InfoTect" , "React Js"]
// myData.push(5000)
// console.log(myData);

// unshift() is used to add element in the begninng of the Array

//example
// const myData = ["Abhishek Dubey" , 25 , "React Js"]
// let data = myData.unshift("Tagline Infotech")
// console.log(`The final Array is ${myData} and length is ${data}`);

{
  /* pop() method */
}

/// pop() method remove the last element from the Array and return removed element in array
// const myData = ["Abhishek Dubey" , 25 , "React Js"]
// let removeElement = myData.pop();
// console.log(removeElement);

{
  /* shift() method */
}
// const myData = ["Abhishek Dubey" , 25 , "React Js"]
// let removeElement = myData.shift();
// console.log(removeElement);
// console.log(myData);

{
  /* using shift() method while loop */
}

// var names = ["Andrew", "Edward", "Paul", "Chris", "John"];

// while( typeof (i = names.shift()) !== 'undefined' ) {
//     console.log(i);
// }

{
  /* slice() method */
}

// slice method copy array to another array,
//const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
//let copyData = animals.slice();                       /// output is [ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
// copyData = animals.slice(1,3);                      // output is [ 'bison', 'camel' ]
//let copyData = animals.slice(-2);                     // output is [ 'duck', 'elephant' ]
//let copyData = animals.slice(2, -1);                    // output is [ 'camel', 'duck' ]
//console.log(copyData);
//console.log(`copyData is ${copyData}`);

{
  /* Array.isArray() method */
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// returnValue = Array.isArray(fruits);
//returnValue = Array.isArray({name : "Banana", description : "Orange"});
//  let returnValue = Array.isArray('foobar');
// console.log(returnValue);

// // all following calls return true
// Array.isArray([]);
// Array.isArray([1]);
// Array.isArray(new Array());
// Array.isArray(new Array('a', 'b', 'c', 'd'));
// Array.isArray(new Array(3));

{
  /* Concat() method */
}

/// The concat method is used to marge more then one array and return new array they do not change existing arrays.

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat();   /// it return
// console.log(array3);

{
  /* join() Method */
}

///  The join() method creates and returns a new string by concatenating all of the elements in an array
// const elements = ["Fire", "Air", "Water"];
// if (elements.length == 0) {
//   console.log("Array is empty!");
// } else {
//   console.log(elements.join("-"));
// }
// console.log(elements.join());

{
  /* includes() */
}
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const elements = [1, 2, 3, 4, 5];
console.log(elements.includes("2"));

const animals = ["Fire", "Air", "Water", "Abhishek", "Dubey" , "KGF2" , "KGF3" , "KGF4" ];
if (animals.includes("Fire")) {
  console.log("!ye it search element is here");
} else {
  console.log("!ye it search element is not here");
}
console.log(animals.includes("Dubey", 5));

{
  /* indexOf() */
}

//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

// const myData = ["Abhishek", "Dubey", "React JS", "Vie Js", "KGF" , "Abhishek" , "Dubey"];
//  let searchElement = myData.indexOf("Dubey" , 3);
//  console.log(`index of the searchElement is ${searchElement}`);
// /// Small Demo if indexOf() method
// if (myData.indexOf("Abhishek") !== -1) {
//   myData.push("KGF2");
// } else {
//   console.log("Element is not present in the array");
// }

// console.log(`myData array Value is ${myData}`);

{
  /* filter() method in js */
}

// let myData = [
//   { name: "Abhishek", age: "25" },
//   { name: "Keval", age: "23" },
//   { name: "bhautik", age: undefined },
//   { name: "priya", age: undefined },
// ];

// const filltrData = myData.filter((value) => {
//   if (value.age !== undefined) {
//     return value;
//   }
// });

// console.log(`fillterData is ${JSON.stringify(filltrData)}`);

{
  /* sort() in js */
}

// const myData = ["dubey " , "priya" , "Parkash" ,  "abhishek" , "Banana" , "banglore" , "nakamura"] ;

// console.log(myData.sort());

// /// Numeric Sort

// const myNumber = [95 , 84 , 94 , 25 , 87 , 15 , 3 , 11];
// console.log(myNumber.sort());

// Example of sorting array with alphabetic sort and numeric

// const points = [40, 100, 1, 5, 25, 10];
// console.log("Alphabetic sorting is :- " , points.sort());

// const myPoints = [40, 100, 1, 5, 25, 10];
// console.log("Numeric sorting is :- " , myPoints.sort(function(a,b){
//      return a - b ;
// }));

///implement sorting in Array of Objects

var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 0 },
  { name: "Zeros", value: 37 },
];

/// Sort by Values is

// var sortValues = items.sort((a, b) => {
//   return a.value - b.value;
// });
// console.log(sortValues);

//// Sort by Name is

// var sortName = items.sort((a, b) => {
//      if(a.name > b.name) {
//          return 1
//      }
//      else if(a.name < b.name) {
//        return -1
//      }
//      return 0
// })

// console.log("Sort by Name :- ", sortName);

{
  /* Sort Array of Objects */
}

let employees = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 27,
    joinedDate: "December 15, 2017",
  },

  {
    firstName: "Ana",
    lastName: "Rosy",
    age: 25,
    joinedDate: "January 15, 2019",
  },

  {
    firstName: "Zion",
    lastName: "Albert",
    age: 30,
    joinedDate: "February 15, 2011",
  },
];

// /// Sort Employee ages accending order:
// employees.sort((a,b)=> {return a.age - b.age});

// /// Sort Employee First Name

// let sortByNaFirstName = employees.sort((a,b)=> {
//     if(a.firstName < b.firstName)
//     return -1;
//     if(a.firstName > b.firstName)
//     return 1;
//     return 0;
// })

// console.log(`Sort by FirstName is ${sortByNaFirstName}`);
// /// Display Sort By Age

// employees.forEach((element) =>{
//   return console.log(`The Name is ${element.firstName} and the age is ${element.age}`);
// })

/// Sort Employee Joining Date

/// Approch First the joining date in object property that is String first Convert the String Object to a Date Object

// let sortByDate = employees.sort((a,b) => {
//    // Convert the String Object to a Date Object
//      let dateFirst = new Date(a.joinedDate)
//      let dateSecond  = new Date(b.joinedDate)
//      console.log(`First Date is ${dateFirst} and  secondDate is ${dateSecond}`);
//       return dateFirst - dateSecond
// })

// console.log(sortByDate);

{
  /* Splice() Methods */
}

// const item = ["Banana", "Orange", "Apple", "Mango"];
// console.log("Befor impliment with splice " , item);

// const returnValues = item.splice(2 , 0 , "Abhishek" , "Dubey")
// console.log(returnValues);

// console.log("impliment with splice " , item);

// {/* New concept How to add new Element without removing any element */}
// let months = ["January", "February", "Monday", "Tuesday"];
// months.splice(2, 0, "March");

// console.log(months)

{
  /* Reduce() method */
}

// const number = [50 , 10 , 100 , 5, 25]
// const sum = number.reduce((previousValue , currentValue) => {
//     return previousValue + currentValue;
// } , initialValue);

// console.log('The Sum is using of reducer function' , sum);

/// Sum of Array of object

//  let myArray = [{x : 1}, {x : 2} , {x : 3}]
//  let sumofObject = myArray.reduce((previousValue , currentValue) =>{
//      return previousValue + currentValue.x;
//  }  , 0 );

//  console.log("Sum of Array of object is using of reducer function" , JSON.stringify(sumofObject));

{
  /* find() */
}

const myArray = [2 , 8 , 10 , 12 , 5]
let findValue = myArray.find((element , index )=>{
  // console.log(index);
  return element > 10
})
console.log(`FindValue Value is ${findValue}`);

{
  /* find the property in array of object */
}

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 11 },
  { name: "blue baries", quantity: 10 },
  { name: "mango", quantity: 12 },
  { name: "orange", quantity: 22 },
  { name: "orange", quantity: 5 },
];

/// Let begain find() vs fillter()

// find the item in array they quantity more then 10 using find() and fillter().

// let findValue = inventory.find((element)=>{
//     return element.quantity > 10 ;
// })
// console.log(`The find value is that quantity more than 10  ${JSON.stringify(findValue)}`);

// let findValue = inventory.filter((element)=>{
//   return element.quantity > 10 ;
// })
// console.log(`The find value is that quantity more than 10  ${JSON.stringify(findValue)}`);

/// find return only one element they found first in array. and filter check all the value of Array then return the value

{
  /* Diffrence b/w indexOf() vs findIndexOf() */
}

// let myValue = ["KGF" , "KGF2" , "KGF3", "Priya" ,"Abhishek" , "Ramesh" , "Partik" , "Priya"]
// let findName = myValue.indexOf("Priya")
// console.log(`Value is find it ${findName}`);

let myValue = [
  "KGF",
  "KGF2",
  "KGF3",
  "Priya",
  "Abhishek",
  "Ramesh",
  "Partik",
  "Priya",
];
let findName = myValue.findIndex((element) => {
  return element === "Priya";
});
console.log(`Value is find it ${findName}`);

/// the diffrence is indexof find the vlue in perticular index and findindex return the find the index of a particular element
// the similar is that both return only value they find first in array they not visit to other element in array

{
  /* every() method */
}

// let myNumbers = [12 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12]
// let myNumber = [12, 13, 100, 40, 50];

// /// first we check myNumbers
// // they check every number in array is > 10 ;
// let gretherTen  = myNumbers.every((element)=>{
//         return element > 10
// })

// console.log('The value of gretherTen is ' + gretherTen);

// // second we check myNumber
// let everyResult = myNumber.every((element)=>{
//    return element > 10 ;
// })

// console.log("The value of everyResult is " + everyResult);


{/* some() */ }

/// 

// let someResult = myNumbers.some((element) =>{
//   return element === 10 ;

// })

// console.log(`The element is equal to 10 is ${someResult}`);

{/* fill method */}

// const fruitss = ["Banana", "Orange", "Apple", "Mango"];
// fruitss.fill("KGF" , 2 , 4)
// console.log('The Fruit array is:- ' ,  fruitss);