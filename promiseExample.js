/// fetch roll number after 2s using promises

/// Create Promise object used promise constructor

const promise = new Promise((resolve, reject) => {
  // fetch roll number after 2s using promises
  setTimeout(() => {
    let rollNumber = [1, 2, 3, 4, 5];
    /// i am promise with you i am fetch the roll number in APIs
    // if your promise is fulfilled used resolve function

    resolve(rollNumber);

    // reject("Your promise was rejected"); // if your promise is rejected,
  }, 2000);
});

/// new task is fetch particular userData to be passed the selected roll number

const fetchUserData = (rollNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (rollNumber) => {
        let myBioData = {
          name: "Abhishek",
          age: "25",
        };

        resolve(
          `The passed rollNumber is ${rollNumber} and username is ${myBioData.name} and user age is ${myBioData.age}`
        ); // if promise is resolved
      },
      2000,
      rollNumber
    );
  });
};

promise
  .then((myRollNumber) => {
    console.log(
      `the promise is fulfilled with and then roll number is s: ${myRollNumber}`
    );

    return fetchUserData(myRollNumber[1]);
  })
  .then((resolveMsg) => {
    console.log(`Promise is resolved with: ${resolveMsg}`);
    ``;
  })
  .catch((errorMsg) => {
    console.log(`Your are not fetch the roll number Because of ${errorMsg}`);
  });
