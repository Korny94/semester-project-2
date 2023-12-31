import {
  api,
  register,
  registerBtn,
  registerUsername,
  registerEmail,
  registerPassword,
  registerModal,
} from "../consts/consts.js";

registerBtn.addEventListener("click", () => {
  registerUser();
});

registerUsername.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    registerUser();
  }
});

registerEmail.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    registerUser();
  }
});

registerPassword.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    registerUser();
  }
});

async function registerUser() {
  try {
    const userData = {
      method: "POST",
      body: JSON.stringify({
        name: registerUsername.value,
        email: registerEmail.value,
        password: registerPassword.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(api + register, userData);
    const json = await response.json();
    if (response.ok) {
      registerModal.style.display = "none";
      loginModal.style.display = "block";
      alert("Registration successful, please log in");
    }

    if (json.errors) {
      if (
        json.errors[0].message ==
        "Only noroff.no emails are allowed to register"
      ) {
        alert("Email must end in @stud.noroff.no");
      } else {
        alert(json.errors[0].message);
      }
    }
  } catch (error) {
    console.error(error);
  }
}
