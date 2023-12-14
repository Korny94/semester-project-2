import {
  api,
  profiles,
  login,
  loginEmail,
  loginPassword,
  loginBtn,
} from "../consts/consts.js";

loginBtn.addEventListener("click", () => {
  loginUser();
});

loginEmail.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    loginUser();
  }
});

loginPassword.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    loginUser();
  }
});

async function loginUser() {
  const lowerCaseEmail = loginEmail.value.toLowerCase();
  try {
    const loginData = {
      method: "POST",
      body: JSON.stringify({
        email: lowerCaseEmail.trim(),
        password: loginPassword.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(api + login, loginData);
    const json = await response.json();

    if (json.errors) {
      alert(json.errors[0].message);
    }

    localStorage.setItem("token", json.accessToken);
    localStorage.setItem("name", json.name);
    localStorage.setItem("email", json.email);
    localStorage.setItem("credits", json.credits);
    localStorage.setItem("myName", json.name);
    localStorage.setItem(
      "profileApi",
      api + profiles + "/" + json.name + "?_listings=true"
    );
    if (response.ok) {
      location.href = "../../html/listings.html";
    }
  } catch (error) {
    console.error(error);
  }
}
