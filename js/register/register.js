import {
  api,
  register,
  registerBtn,
  registerUsername,
  registerEmail,
  registerPassword,
} from "../consts/consts.js";

registerBtn.addEventListener("click", () => {
  registerUser();
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
    if (json.ok) {
      registerModal.style.display = "none";
      loginModal.style.display = "block";
    }

    console.log(json);
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
