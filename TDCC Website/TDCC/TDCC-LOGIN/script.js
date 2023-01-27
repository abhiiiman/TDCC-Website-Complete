function login(){
    // Retrieving the data here.
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    // storing the data in the local storage
    var student_mail = localStorage.setItem("email", email.value);
    var student_password = localStorage.setItem("password", password.value);
}