import {
  api,
  listings,
  token,
  newListings,
  createListing,
  listingsDiv,
  exitListing,
  closeListing,
  postListing,
  postDate,
  postTitle,
  postDescription,
  postImage,
  myListingsDiv,
  profilePic,
  currentDate,
} from "../consts/consts.js";

currentDate.setHours(currentDate.getHours() + 2);
const twoHoursLater = currentDate.toISOString().slice(0, 16);
postDate.value = twoHoursLater;

exitListing.addEventListener("click", () => {
  createListing.style.display = "none";
  if (profilePic) {
    profilePic.style.display = "flex";
  }
  if (listingsDiv) {
    listingsDiv.style.display = "flex";
  } else {
    myListingsDiv.style.display = "flex";
  }
});

closeListing.addEventListener("click", () => {
  createListing.style.display = "none";
  if (profilePic) {
    profilePic.style.display = "flex";
  }

  if (listingsDiv) {
    listingsDiv.style.display = "flex";
  } else {
    myListingsDiv.style.display = "flex";
  }
});

newListings.addEventListener("click", () => {
  createListing.style.display = "flex";
  if (profilePic) {
    profilePic.style.display = "none";
  }
  if (listingsDiv) {
    listingsDiv.style.display = "none";
  } else {
    myListingsDiv.style.display = "none";
  }
});

postListing.addEventListener("click", () => {
  if (postTitle.value == "") {
    alert("Title cannot be empty");
  } else {
    newListing();
  }
});

async function newListing() {
  const media =
    postImage.value ||
    "https://cdn.pixabay.com/photo/2017/10/26/17/37/auction-2891804_1280.jpg";
  try {
    const newListingData = {
      method: "POST",
      body: JSON.stringify({
        title: postTitle.value,
        endsAt: postDate.value,
        description: postDescription.value,
        media: [media],
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(api + listings, newListingData);
    const json = await response.json();
    if (json.errors) {
      alert(json.errors[0].message);
    }
    if (response.ok) {
      location.reload();
    }
  } catch (error) {
    console.error(error);
  }
}
