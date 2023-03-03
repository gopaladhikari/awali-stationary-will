let loginForm = document.getElementById("loginForm");

setTimeout(() => {
  loginForm.classList.add("open-login-form-popup");
}, 3000);

const closeLogin = () => {
  loginForm.style.display = "none";
};
