/// simple callback function  example

// const fun1 = (myfun2, name) => {
//   setTimeout(function () {
//     console.log(`Function1 is called with name ${name}`);
//     myfun2();
//   }, 3000);
// };

// // const fun2 = () => {
// //     console.log("Function 2 is called");
// // }

// fun1(() => {
//   console.log("Function 2 is called");
// }, "Hello Peter");


//// Example of callback hell

const  myRollNum = () =>{
     setTimeout(()=>{
        console.log("API is called");
        let myRollNumber = [1,2,3,4,5]
        console.log(myRollNumber);
        {/* Fetch Roll number in array after 2s */}
        setTimeout((myRollNumber) =>{
            const myData = {
                name : "Abhishek" ,
                age : 25, 
                rollNumber : 2,
            }
            if(myRollNumber === myData.rollNumber){
                console.log(`The name is ${myData.name} and the age is ${myData.age}`);
            }
            else{
                console.log("Data is not equal to roll number");
            }
            {/* fetch Genders  after 2s */} 
            setTimeout(() => {
                myData.gender = 'Male'
                console.log(`the user gender is ${myData.gender}`);
            }, 2000)
        }, 2000 , myRollNumber[1]);

    }, 2000)
  
}
myRollNum()
