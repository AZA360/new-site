// Code for validating form
function validateForm() {
    var yourName = document.getElementById("yourName").value;
    var Subject = document.getElementById("Subject").value;
    var email = document.getElementById("e-mail").value;
    var message = document.getElementById("message");


    if (yourName.length == 0) {
        alert("Details must be filled out!");
    } else if (Subject.length == 0) {
        alert("Details must be filled out!");
    } else if (email.length == 0) {
        alert("Details must be filled out!");
    } else if (message.length == 0) {
        alert("Details must be filled out!");
    } else {
        return true;
    }
}

// Code to check if e-mail is valid

img.setAttribute('src', 'logo1.jpg');