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

if (name === myName) {
  myProfilePage.classList.add("active");
}

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
    console.log(json);
    profilePic.src = json.avatar;
  } catch (error) {
    console.error(error);
  }
}

getProfile(apiProfile);

profilePic.addEventListener("click", () => {
  const avatar = prompt("Input image URL to change your profile picture");
  if (name == "guest") {
    alert("You must be logged in to change your profile picture");
    return;
  } else if (avatar !== "") {
    updateProfile(avatar, myProfileApi);
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
    console.log(json);
    location.reload();
  } catch (error) {
    console.error(error);
  }
}

// viewBids.addEventListener("click", () => {
//   if (viewBids.innerHTML == "View bids") {
//     viewBids.innerHTML = "View listings";
//     viewBids.style.left = "3.6rem";
//     myBids(myBidsApi);
//   } else {
//     viewBids.innerHTML = "View bids";
//     viewBids.style.left = "4rem";
//   }
// });

// async function myBids(myBidsApi) {
//   try {
//     const myBidsData = {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         authorization: `Bearer ${token}`,
//       },
//     };
//     const response = await fetch(myBidsApi, myBidsData);
//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.error(error);
//   }
// }
