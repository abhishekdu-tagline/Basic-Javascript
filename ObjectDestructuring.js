//// Perform Object Destructuring Example

let myObj = {
  name: "Abhishek",
  age: 25,
  degree: "MCA",
  company: "Tagline Infotech",
};

/// Object destructuring is used for to store Object value in individual variables

// let {name, age, degree, company} = myObj
// console.log(`The user name is ${name} and the age is ${age} . qualification is ${degree} . company is ${company}`);

/// New Concept in Object Destructuring
// in Object Destructuring the variable should be same as the Object key name other wise they give error to directly assign diffrent variable name

// let {name : myName, age : myAge, degree : myDegree, company : myCompany} = myObj
// console.log(`The user name is ${myName} and the age is ${myAge} . qualification is ${myDegree} . company is ${myCompany}`);

// Using Default Value in Destructuring

// let person = { name: "Dubey", country: "Bharat", job: "Developer" };
// let {
//   name: myName,
//   country = "india",
//   technology = "React Js",
//   age = 25,
// } = person;
// console.log(
//   `The User name is ${myName} and the age is ${age} and usefull technology is ${technology}`
// );

// Nested Objects Destructing

let person = {
  name: "Sarah",
  place: {
    country: "Nigeria",
    city: "Lagos",
  },
  friends: ["Annie", "Becky"],
  age :25, 
  technology: "React"
};

let {name : myName , place : {country : myCountry, city : myCity} , friends : myFriends , ...rest} = person;
console.log(`The name is ${myName} and the Country is ${myCountry} and the City is ${myCity} and friends are ${myFriends}`);
console.log("The Rest Object Properties are: " , rest);