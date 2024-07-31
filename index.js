// document.getElementByClassName('registrationForm').addEventListener('submit', function(event) {
    //     event.preventDefault();
    //     const submitBtn = document.getElementByClassName('submitBtn');
    //     const password = document.getElementByClassName('password').value;

    //     if (!validatePassword(password)) {
    //         alert('Password must be at least 8 characters long, contain uppercase and lowercase letters, a number, and a special character.');
    //         return;
    //     }

    //     submitBtn.disabled = true;
    //     submitBtn.textContent = 'Submitting...';

    //     // Simulate form submission (e.g., AJAX request)
    //     setTimeout(() => {
    //         alert('Form submitted successfully!');
    //         submitBtn.disabled = false;
    //         submitBtn.textContent = 'Submit';
    //         document.getElementById('registrationForm').reset();
    //     }, 2000);
    // });

    // function validatePassword(password) {
    //     const minLength = 8;
    //     const hasUpperCase = /[A-Z]/.test(password);
    //     const hasLowerCase = /[a-z]/.test(password);
    //     const hasNumbers = /\d/.test(password);
    //     const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    //     return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars;}




// //  let rite = document.getElementById("rite");
// //  console.dir(rite);

// let r3= document.getElementsByClassName("r3");
// // console.dir(r3);
// console.log(r3);

// const handleSubmit=()=>{

// }

// var password = 123456;

// if(password.length < 8) {

// console.log(`“Error: "Password must be at least 8 characters”`);

// } else if(password.search(/[a-z]/) < 0) {

// console.log(`“Error: Password must contain at least one lowercase letter”`);

// } else if(password.search(/[A-Z]/) < 0) {

// console.log(`“Error: Password must contain at least one uppercase letter”`);

// } else if(password.search(/[0-9]/) < 0){}

// console.log(`“Error: Password must contain at least one number"`);

// // // else {

// // // console.log(“Success!”);

// // }


// function valdite (){
//     let r3= document.getElementsByClassName("r3");
//     console.log(r3)


// }

// function validatePassword() {
//     var r3 = document.getElementById('r3').value;
//     var errorMessage = document.getElementById('error-message');
//     errorMessage.innerHTML = '';
// }

// document.getElementByClassName('registrationForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const submitBtn = document.getElementByClassName('submitBtn');
//     const password = document.getElementByClassName('password').value;

//     if (!validatePassword(password)) {
//         alert('Password must be at least 8 characters long, contain uppercase and lowercase letters, a number, and a special character.');
//         return;
//     }

//     submitBtn.disabled = true;
//     submitBtn.textContent = 'Submitting...';

//     // Simulate form submission (e.g., AJAX request)
//     setTimeout(() => {
//         alert('Form submitted successfully!');
//         submitBtn.disabled = false;
//         submitBtn.textContent = 'Submit';
//         document.getElementById('registrationForm').reset();
//     }, 2000);
// });

// function validatePassword(password) {
//     const minLength = 8;
//     const hasUpperCase = /[A-Z]/.test(password);
//     const hasLowerCase = /[a-z]/.test(password);
//     const hasNumbers = /\d/.test(password);
//     const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

//     return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars;
// }

function checkingvalue (){
    // e.preventDefault();
    var FirstName = document.getElementById("r1").value.trim();
    var LastName = document.getElementById("r2").value.trim();
    var password = document.getElementById("r3").value.trim();
    var email = document.getElementById("r4").value.trim();

    if (!FirstName || !LastName|| !password || !email){
        alert("All fields must be filled out.");
    }else
    {
        alert("Form submitted successfully.");
    }

 }


// const firstName= document.getElementsByClassName("r1")
// const lastName= document.getElementsByClassName("r2")
// const password= document.getElementsByClassName("r3")
// const email= document.getElementsByClassName("r4")


// function checkingvalue(){

// if(firstName == " "||lastName == " " || password == " " || email ==" "){
// alert("All fields are mandatory")
// }
// // alert("please enter the first name")



// }
// document.getElementById("xx").addEventListener("click", checkingvalue);



