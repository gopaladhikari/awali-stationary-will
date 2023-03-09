// ================Form Validation =================

// login Form
let loginForm = document.getElementById("loginForm");
let password = document.getElementById("password");
let email = document.getElementById("email");
let userName = document.getElementById("userName");
let Body = document.getElementById("body");
let radio = document.getElementById("radio");
let reistrationForm = document.getElementById("registration-form");
// Registraion form
let regEmail = document.getElementById("reg-email");
let regPassword = document.getElementById("reg-password");
let confirmPassword = document.getElementById("confirm-password");
let phoneNumber = document.getElementById("phone-number");
let error = document.getElementById("error");
let counter = 0;

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

reistrationForm.onsubmit = (event) => {
  if (regEmail.value == "") {
    error.innerHTML = "Please enter a valid email address";
    setTimeout(() => {
      error.innerHTML = "";
    }, 3000);
    return false;
  } else if (regPassword.value == "") {
    error.innerHTML = "Please enter a password";
    setTimeout(() => {
      error.innerHTML = "";
    }, 3000);
    return false;
  } else if (regPassword.value != confirmPassword.value) {
    error.innerHTML = "Password does'nt match";
    setTimeout(() => {
      error.innerHTML = "";
    }, 3000);
    return false;
  } else if (phoneNumber.value == "") {
    error.innerHTML = "Please enter a phone number";
    setTimeout(() => {
      error.innerHTML = "";
    }, 3000);
    return false;
  }
};
// ================Form Validation Ends =================
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000, // in milliseconds
    disableOnInteraction: false, // set to true if you want to disable autoplay on user interaction
  },
  loop: true, // enable pagination loop
});

const carousel = document.querySelector(".logo-wrapper");
let icons = document.querySelectorAll(".i");
let firstImg = carousel.querySelectorAll("img")[0];
let firstImgWidth = firstImg.clientWidth + 100;

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    carousel.scrollLeft += icon.id === "right" ? firstImgWidth : -firstImgWidth;
  });
});

const categoryBtn = document.querySelector(".category-btn");
const categoryDropdown = document.querySelector(".category-btn-dropdown");

categoryBtn.onclick = () => {
  categoryDropdown.classList.toggle("show-dropdown");
};
