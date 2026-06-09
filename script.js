const title = document.getElementById("title");
const nameField = document.getElementById("nameField");
const pswrd = document.getElementById("pswrd");
const email = document.getElementById("email");
const signinBtn = document.getElementById("signInbtn");
const signupBtn = document.getElementById("signUpbtn");

signupBtn.onclick = function(){
    title.innerHTML = "Sign Up";
    nameField.style.display = "block";
    nameField.value = "";
    pswrd.value = "";
    email.value = "";
}

signinBtn.onclick = function(){
    title.innerHTML = "Login";
    nameField.style.display = "none";
}
