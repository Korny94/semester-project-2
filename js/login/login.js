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

async function loginUser() {
  try {
    const loginData = {
      method: "POST",
      body: JSON.stringify({
        email: loginEmail.value,
        password: loginPassword.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(api + login, loginData);
    const json = await response.json();
    console.log(json);

    if (json.errors) {
      if (json.errors[0].message == "Email must be a valid email") {
        alert("Email must be a valid email ending in @stud.noroff.no");
      } else {
        alert("Invalid password");
      }
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

    location.href = "../../html/listings.html";
  } catch (error) {
    console.error(error);
  }
}