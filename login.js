


    // function validatePassword() {
    //     var password = document.getElementById('password').value;
    //     var errorMessage = document.getElementById('error-message');
    //     errorMessage.innerHTML = '';

    //     if (password.length < 8) {
    //         errorMessage.innerHTML = 'Password must be at least 8 characters long.';
    //         return false;
    //     }

    //     if (!/[A-Z]/.test(password)) {
    //         errorMessage.innerHTML = 'Password must contain at least one uppercase letter.';
    //         return false;
    //     }

    //     if (!/[a-z]/.test(password)) {
    //         errorMessage.innerHTML = 'Password must contain at least one lowercase letter.';
    //         return false;
    //     }

    //     if (!/[0-9]/.test(password)) {
    //         errorMessage.innerHTML = 'Password must contain at least one number.';
    //         return false;
    //     }

    //     if (!/[^A-Za-z0-9]/.test(password)) {
    //         errorMessage.innerHTML = 'Password must contain at least one special character.';
    //         return false;
    //     }

    //     alert('Password is valid.');
    //     return true;
    // }


    function validateForm(event) {
        event.preventDefault(); // Prevent form from submitting

        var loginId = document.getElementById("loginId").value;
        var password = document.getElementById("password").value;

        if (loginId === "") {
            alert("LoginId must be filled out");
            return false;
        }

        if (password === "") {
            alert("Password must be filled out");
            return false;
        }

        // If validation passes, you can proceed to submit the form or further process the inputs
        alert("Form submitted successfully!");
        // document.querySelector(".form").submit(); // Uncomment this line to submit the form if needed
    }