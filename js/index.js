import {
  guestLoginBtn,
  guestLoginBtn2,
  registerModal,
  loginModal,
  signInLink,
  signUpLink,
} from "./consts/consts.js";
localStorage.clear();

guestLoginBtn.addEventListener("click", () => {
  location.href = "../html/listings.html";
  localStorage.setItem("token", "guest");
  localStorage.setItem("credits", "0");
});
guestLoginBtn2.addEventListener("click", () => {
  location.href = "../html/listings.html";
  localStorage.setItem("token", "guest");
  localStorage.setItem("credits", "0");
});
registerModal.style.display = "block";

signInLink.addEventListener("click", () => {
  registerModal.style.display = "none";
  loginModal.style.display = "block";
});

signUpLink.addEventListener("click", () => {
  registerModal.style.display = "block";
  loginModal.style.display = "none";
});
