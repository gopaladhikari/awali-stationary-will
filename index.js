let loginForm = document.getElementById("loginForm");
let password = document.getElementById("password");
let email = document.getElementById("email");
let userName = document.getElementById("userName");
let Body = document.getElementById("body");
let radio = document.getElementById("radio");
let reistrationForm = document.getElementById("registration-form");
let confirmPassword = document.getElementById("confirm-password");

setTimeout(() => {
  loginForm.classList.add("open-login-form-popup");
  Body.classList.add("blur");
}, 3000);

const closeLogin = () => {
  loginForm.classList.remove("open-login-form-popup");
  Body.classList.remove("blur");
};

const submitHandler = (e) => {
  if (email.value == "" && password.value == "") {
    alert("Please enter valid email and password");
  } else if (email.value == "" && password.value != "") {
    alert("Please enter the valid email");
  } else if (email.value != "" && password.value == "") {
    alert("Please enter the password");
  } else {
    loginForm.style.display = "none";
    Body.classList.remove("blur");
  }
  e.preventDefault();
};

const dislayLogin = () => {
  loginForm.classList.add("open-login-form-popup");
  Body.classList.add("blur");
};

radio.onclick = () => {
  if (radio.value == "on") {
    radio.value = "off";
    radio.checked = false;
  } else if (radio.value == "off") {
    radio.value = "on";
    radio.checked = true;
  }
};

const closeRegister = () => {
  reistrationForm.classList.remove("open-registration-form");
  Body.classList.remove("blur");
};

const openRegister = () => {
  reistrationForm.classList.add("open-registration-form");
  loginForm.classList.remove("open-login-form-popup");
  Body.classList.add("blur");
};

const togglePassword = () => {
  if (confirmPassword.type == "password") {
    confirmPassword.type = "text";
  } else {
    confirmPassword.type = "password";
  }
};
