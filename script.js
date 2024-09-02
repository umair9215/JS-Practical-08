
//////////************************************GENERATING RANDOM NUMBERS *********************************///////////////////////////

// let a = Math.random() * 100;
// a = Math.ceil(a);
// console.log(a);



// let a = Math.random() * prompt('Enter a random number');
// alert(a);



// let a = Math.random() * 2;
// a = Math.floor(a);
// if (a === 0){
//     alert("Head");
// }
// else if (a === 1){
//     alert("Tail");
// }



//////////************************************RANDOM PASSWORD GENERATOR *********************************///////////////////////////

// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// let password = '';

// for (let i = 0; i < 12; i++) {
//     password += characters.charAt(Math.floor(Math.random() *characters.length));
// }
// alert(password);



//////////************************************CONVERTING STRINGS TO INTEGERS & DECIMALS *********************************///////////////////////////

// let a = parseInt("123");
// console.log( a);

// let a = parseFloat("123.45")
// console.log(a);

// let a =prompt("Enter a Number");
//  a = parseInt(a);
//  alert(typeof a);


//////////************************************CONVERTING STRINGS TO NUMBERS, NUMBERS TO STRINGS *********************************///////////////////////


// let a = "123";
// a = Number(a);
// console.log(a);


// let a = 123;
// a = a.toString();
// console.log(typeof a);

// let a = prompt("Enter a number");
// if (typeof a === "number"){
//     a.toString();
//     alert(typeof a);
// }
// else if (typeof a === "string"){
//     a = Number(a);
//     alert(typeof a);
// }
// else{
//     alert("You must enter a number");
// }




//////////************************************CONTROLLING THE LENGTH OF DECIMALS USING toFixed() METHOD **************************/////////////


// let a = 123.45678;
// let b = a.toFixed(2);
// console.log(b);


// let a = 123.45678;
// let b = a.toFixed(4);
// console.log(b);

// let num = prompt("Enter a number:");
// let decimalPlaces = prompt("Enter the number of decimal places:");
// num = Number(num);
// let formattedNumber = num.toFixed(decimalPlaces);
// alert(formattedNumber);




//////////************************************GETTING THE CURRENT DATE AND TIME **************************/////////////

// let currentTime = new Date();
// console.log(currentTime);

// let rightNow = new Date();
// rightNow = rightNow.getTime();
// console.log(rightNow);


// let currentTime = new Date();
// currentTime = currentTime.toString();
// console.log(typeof currentTime);





//////////************************************AGE CALCULATOR BY BIRTHDATE **************************/////////////

// let birthdate = new Date('2006-04-21');
// let today = new Date();
// let age = today.getFullYear() - birthdate.getFullYear();
// if (today.getMonth() < birthdate.getMonth() || (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())) {
//     age--;
// }
// console.log('You are ' + age + ' years old.');



//////////************************************EXTRACTING PARTS OF THE DATE **************************/////////////

// let now = new Date();
// now = now.getFullYear();
// console.log(now);


// let now = new Date();
// now = now.getMonth();
// console.log(now);

// let dateInput = new Date('2024-06-20');
// let day = dateInput.getDate();
// let month = dateInput.getMonth() + 1;
// let year = dateInput.getFullYear();

// console.log(`Day: ${day}`);
// console.log(`Month: ${month}`);
// console.log(`Year: ${year}`);






// let d = new Date("January 01, 2022 12:00:00");
// console.log(d);

// let year = prompt("Enter the year:");
// let month = prompt("Enter the month (1-12):");
// let day = prompt("Enter the day (1-7):");
// let hours = prompt("Enter the hours (0-23):");
// let minutes = prompt("Enter the minutes:");
// let seconds = prompt("Enter the seconds:");

// let customDate = new Date(year, month, day, hours, minutes, seconds);

// alert(customDate);


// const inputString = "2022-01-01 12:00:00";

// const dateTimeParts = inputString.split(' ');
// const datePart = dateTimeParts[0];
// const timePart = dateTimeParts[1];

// const dateComponents = datePart.split('-');
// const year = dateComponents[0];
// const month = dateComponents[1];
// const day = dateComponents[2];

// const timeComponents = timePart.split(':');
// const hours = timeComponents[0];
// const minutes = timeComponents[1];
// const seconds = timeComponents[2];

// const dateObject = new Date(year, month - 1, day, hours, minutes, seconds);

// console.log("Date Object:", dateObject);







//////////************************************CHANGING ELEMENTS OF A DATE AND TIME **************************/////////////


// const currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 1);
// console.log("New Date:", currentDate);



// const currentTime = new Date();
// currentTime.setHours(currentTime.getHours() - 1);
// console.log("New Time:", currentTime);



// const currentDate = new Date();
// const daysToAdd = 3;   
// const hoursToAdd = 2;  
// const minutesToAdd = -30; 
// currentDate.setDate(currentDate.getDate() + daysToAdd);
// currentDate.setHours(currentDate.getHours() + hoursToAdd);
// currentDate.setMinutes(currentDate.getMinutes() + minutesToAdd);
// console.log("Modified Date and Time:", currentDate);




// const targetDate = new Date("2024-12-31T23:59:59");
// setInterval(() => {
//     const now = new Date();
//     const timeDifference = targetDate - now;
//     const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
//     const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
//     const seconds = Math.floor((timeDifference / 1000) % 60);
//     console.log(days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds");
//     if (timeDifference < 0) {
//         clearInterval(); 
//         console.log("Countdown is over!");
//     }
// }, 1000);





// const appointmentDate = new Date("2024-09-10T15:00:00");
// const now = new Date();
// if (now < appointmentDate) {
//     console.log("Appointment scheduled for: " + appointmentDate);
// } else {
//     console.log("The appointment time has passed.");
// }

