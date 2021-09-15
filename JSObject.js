
//// Create Simple Object

let myData = {
    firstName : "Abhishek",
    lastName : "Dubey",
    age : 25, 
    "my City" : "Surat",
    myFunc : function(){
        return "Hello Welcome the react  world!";
    }
};
// console.log(myData.myFunc());


// /// access object property using [] notation
// console.log(myData['age']);
// console.log(`my city name is ${myData['my City']}`);

// // Modify Object Properties Values

// myData.firstName = "Yash";
// console.log("agther modifiction of first name the Object is" , myData);

// // Delete Object Properties Values
// // Delete age property

// delete myData.age;
// console.log("afther delete age property the object is" , myData);

/// Used for..in loop to itrate Object

// for(let key in myData) {
//     console.log(`Object key Values is :- ${key}`);
// }

{/* Object.keys() method */}

// let keyValue = Object.keys(myData);
// console.log(keyValue);

// {/* Object.values() method */}
// let objectValue = Object.values(myData);
// console.log(objectValue);

{/*Object enteries */}

let enteriesValue = Object.entries(myData);
// console.log(enteriesValue);

let mappedValue = enteriesValue.map(([key , value]) => {           {/* impliment  map() in Object.entries */}
         return `the key is ${key} and the value is ${value}`
})
console.log(mappedValue);