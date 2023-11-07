// let firstName = prompt("Input your first name");
// let lastName = prompt("Input your last name");
// let gender = prompt("Input your gender");
// let age = parseInt(prompt("Input your age"));

// if (gender) {
//     // if gender is male
//     if (gender === 'Male' || gender === 'male' || gender === 'M' || gender === 'm') {
//         // if the is availabe
//         if (age) {
//             // if age is less tha or greater than 18
//             if (age <= 18 || age >= 18) {
//                 // if first both name is available
//                 if (firstName && lastName) {
//                     alert(`Hello ${firstName} ${lastName} your'e ${age}years of age`);
//                 }
//                 // if only first name is availabe
//                 else if (!firstName && lastName) {
//                     alert('Input First name Mr.');
//                 }
//                  // if only first name is availabe
//                 else if (firstName && !lastName) {
//                     alert('input last name Mr.');
//                 }
//                 // if both names not availabe 
//                 else if(!(firstName && lastName)){
//                     alert('Input your First and last name Mr.');
//                 }
//             }
//         }
//         // if age is not available
//         else{
//             alert("input your age");
//         }
//     }
//     // if gender is Female
//     if (gender === 'Female' || gender === 'female' || gender === 'F' || gender === 'f') {
//         // if the is availabe
//         if (age) {
//             // if age is equal to less than  18
//             if (age <= 18) {
//                 // if first both name is available
//                 if (firstName && lastName) {
//                     alert(`Hello Miss. ${firstName} ${lastName} your'e ${age}years of age`);
//                 }
//                 // if only first name is availabe
//                 else if (!firstName && lastName) {
//                     alert('Input First name Miss');
//                 }
//                  // if only first name is availabe
//                 else if (firstName && !lastName) {
//                     alert('input last name Miss');
//                 }
//                 // if both names not availabe 
//                 else if(!(firstName && lastName)){
//                     alert('Input your First and last name Miss');
//                 }
//             }
//             // if age is greater than 18
//             else if (age > 18) {
//                 // if first both name is available
//                 if (firstName && lastName) {
//                     alert(`Hello Mrs. ${firstName} ${lastName} your'e ${age}years of age`);
//                 }
//                 // if only first name is availabe
//                 else if (!firstName && lastName) {
//                     alert('Input First name Mrs');
//                 }
//                  // if only first name is availabe
//                 else if (firstName && !lastName) {
//                     alert('input last name Mrs');
//                 }
//                 // if both names not availabe 
//                 else if(!(firstName && lastName)){
//                     alert('Input your First and last name Mrs');
//                 }
//             }
//         }
//         // if age is not available
//         else{
//             alert("input your age");
//         }
//     }
// }

// // if No geneder
// else{
//     if (!(age && firstName && lastName)) {
//         alert('Fill in the empty spaces')
//     }
//     else{
//          alert('Input your gender');
//     }
// }

 
// alert("Working fine");
// function submitForm(){
//     let fName = firstname.value;
//     let lName = lastname.value;
//     let age = ageOld.value;
//     let gen = gender.value;
//     // console.log(fName + lName + age +gen);
//     if (gen) {
//         if (gen === 'male' || gen === 'Male' || gen === 'M' || gen === 'm') {
//             if (age) {
//                 if (age <= 18 || age > 18) {
//                     display.innerHTML = "Welcome Mr. " + fName + " " + lName + " your'e " + age + " and your gender is " + gen + "";
//                     }
//             }
//             else{
//                 display.innerHTML = 'input your age'
//             }
//         }
//         else{
//             display.innerHTML = 'Input a valid gender';
//         }
//         // for Female
//         if (gen === 'Female' || gen === 'female' || gen === 'F' || gen === 'f') {
//             if (age) {
//                 if (age <= 18) {
//                     display.innerHTML = "Welcome Miss. " + fName + " " + lName + " your'e " + age + " and your gender is " + gen + "";
//                     }
//                     else{
//                     display.innerHTML = "Welcome Mrs. " + fName + " " + lName + " your'e " + age + " and your gender is " + gen + "";
//                     }
//             }
//             else{
//                 display.innerHTML = 'Input your age';
//             }
//         }
//         else{
//             display.innerHTML = 'Input a valid gender'
//         }
//     }
//     else{
//         display.innerHTML = 'Input your gender';
//     }
// }


let letter = prompt();
if (letter >= 'a' && letter <= 'z' || letter >= 'A' && letter <= 'Z') {
    alert(`${letter} is an Alphabet`)
}
else{
    alert(`${letter} is not an alphabet`)
}


 

 





















































































