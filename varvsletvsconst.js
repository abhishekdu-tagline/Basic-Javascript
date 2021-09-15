//// Var Variable

// var testter = "hi";
// testter = "Hello how r u?"
// console.log(testter);

// const myFunction = () =>{
//     var hello = "hello";
// }
//console.log(hello);  /// if you access hello variable in outside of function they give error hello is not definede


/// Problum with var

// var myName = "Abhishek Dubey";
// var time = 4 ;
// if(time > 3){
//      myName="Yash Sharma"  
//      console.log("Myname variable scope in inside the functin is" + myName);       /// Problem is that var variables redeclare and redefind that not follow scope proper way 
// }

// console.log("Name is " , myName);

/// Let Variable

// let technology = "Angular"
// if(true){ 
//     let technology = "React Js";
//     console.log("technology variable scope inside the function scope is " , technology);
// }

// console.log("technology variable value is outside of function scope", technology);


//// const variables

// const myNumber = "20"
// myNumber ="25"    /// const variable will be not reinitilized
// console.log(myNumber);   /// Give Error to assignment of constant variable

// const myData = "25"
// const myData = "30"
// console.log(myData);    /// it give the error in myData has already has alredy 


//// Declare Const object

const userData = {                //// if you declare a object with const we will updated object property but not redeclare object they give error
    name : "Abhishek Dubey",
    age : "25",
    technology : "React js"
}

userData.name = "Abhishek SatyaPrakash Dubey"

console.log(userData);