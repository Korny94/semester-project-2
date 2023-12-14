import {
  api,
  profiles,
  token,
  profilePic,
  name,
  myProfilePage,
  myName,
  apiProfile,
  myProfileApi,
  //   myBidsApi,
  //   viewBids,
} from "../consts/consts.js";

myProfilePage.addEventListener("click", () => {
  localStorage.setItem("name", myName);
  localStorage.setItem(
    "profileApi",
    api + profiles + "/" + myName + "?_listings=true"
  );
  location.href = "../html/myProfile.html";
});

export async function getProfile(profileApi) {
  try {
    const userData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(profileApi, userData);
    const json = await response.json();
    profilePic.src = json.avatar
      ? json.avatar
      : "https://cdn.pixabay.com/photo/2017/02/16/12/01/professions-2071316_1280.jpg";
  } catch (error) {
    console.error(error);
  }
}

getProfile(apiProfile);

profilePic.addEventListener("click", () => {
  if (name == "guest") {
    alert("You must be logged in to change your profile picture");
    return;
  } else if (name != myName) {
    alert("You can only change your own profile picture");
  } else {
    const avatar = prompt("Input image URL to change your profile picture");
    if (avatar != null || avatar != "") {
      updateProfile(avatar, myProfileApi);
    }
  }
});

async function updateProfile(avatar, myProfileApi) {
  try {
    const updateProfileData = {
      method: "PUT",
      body: JSON.stringify({
        avatar: avatar,
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(myProfileApi, updateProfileData);
    const json = await response.json();
    location.reload();
  } catch (error) {
    console.error(error);
  }
}
