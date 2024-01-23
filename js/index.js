import {
  guestLoginBtn,
  guestLoginBtn2,
  registerModal,
  loginModal,
  signInLink,
  signUpLink,
  welcomeModal,
  welcomeGuestBtn,
  welcomeLoginBtn,
  welcomeRegisterBtn,
} from "./consts/consts.js";
localStorage.clear();

welcomeModal.style.display = "block";

const guestLogin = () => {
  location.href = "../html/listings.html";
  localStorage.setItem("token", "guest");
  localStorage.setItem("credits", "0");
};

welcomeGuestBtn.addEventListener("click", () => {
  guestLogin();
});

guestLoginBtn.addEventListener("click", () => {
  guestLogin();
});

guestLoginBtn2.addEventListener("click", () => {
  guestLogin();
});

signInLink.addEventListener("click", () => {
  registerModal.style.display = "none";
  loginModal.style.display = "block";
});

signUpLink.addEventListener("click", () => {
  registerModal.style.display = "block";
  loginModal.style.display = "none";
});

welcomeLoginBtn.addEventListener("click", () => {
  welcomeModal.style.display = "none";
  loginModal.style.display = "block";
});

welcomeRegisterBtn.addEventListener("click", () => {
  welcomeModal.style.display = "none";
  registerModal.style.display = "block";
});

alert(
  "To test the application, please use the following credentials:\n\nEmail: testkarl@stud.noroff.no\nPassword: testkarl"
);
