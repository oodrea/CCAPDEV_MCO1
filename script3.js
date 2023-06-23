
var username;
var password;
var description;
var imageFile;

function getRegisterData() {
  
    username = document.getElementById("username1").value;
    password = document.getElementById("password1").value;
    description = document.getElementById("description").value;
    imageFile = document.getElementById("imageFile").value;
};

function getLogInData() {
  
    username = document.getElementById("username2").value;
    password = document.getElementById("password2").value;

    console.log(username);
    console.log(password);
};