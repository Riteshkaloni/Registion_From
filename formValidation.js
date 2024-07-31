function Data(event) {


    var userId = document.getElementById("n1").value;
    var contact = document.getElementById("n2").value;
    var password = document.getElementById("n3").value;
    var confirmPassword = document.getElementById("n4").value;

    var userIdRegex = /^[a-zA-Z]+$/;


    if (!userIdRegex.test(userId)) {
        alert("User ID must be alphanumeric.");
        return false;
    }

    if (userId == "" || contact == "" || password == "" || confirmPassword == "") {
        alert("All fields must be filled out.");
    } else {
        alert("Form submitted successfully.");

    }

}

