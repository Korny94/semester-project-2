export const api = "https://api.noroff.dev/api/v1";
export const register = "/auction/auth/register";
export const login = "/auction/auth/login";
export const listings = "/auction/listings";
export const profiles = "/auction/profiles";

export const token = localStorage.getItem("token");
export const listingsDiv = document.getElementById("listingsDiv");
export const credits = document.getElementById("credits");
export const newListings = document.getElementById("newListing");
export const createListing = document.getElementById("createListing");
export const exitListing = document.getElementById("exitListing");
export const closeListing = document.getElementById("closeListing");
export const postListing = document.getElementById("postListing");
export const postDate = document.getElementById("postDate");
export const postTitle = document.getElementById("postTitle");
export const postDescription = document.getElementById("postDescription");
export const postImage = document.getElementById("postImage");
export const loginEmail = document.getElementById("loginEmail");
export const loginPassword = document.getElementById("loginPassword");
export const loginBtn = document.getElementById("loginBtn");
export const registerBtn = document.getElementById("registerBtn");
export const registerUsername = document.getElementById("registerUsername");
export const registerEmail = document.getElementById("registerEmail");
export const registerPassword = document.getElementById("registerPassword");
export const myListingsDiv = document.getElementById("myListingsDiv");
export const profilePic = document.getElementById("profilePic");
export const name = localStorage.getItem("name");
export const guestLoginBtn = document.getElementById("guestLoginBtn");
export const guestLoginBtn2 = document.getElementById("guestLoginBtn2");
export const loginModal = document.getElementById("loginModal");
export const signInLink = document.getElementById("signInLink");
export const signUpLink = document.getElementById("signUpLink");
export const registerModal = document.getElementById("registerModal");
export const profilePage = document.querySelector("#profilePage");
export const myName = localStorage.getItem("myName");
export const myProfilePage = document.querySelector("#myProfilePage");
export const active = document.querySelector(".active");
export const apiProfile = localStorage.getItem("profileApi");
export const viewBids = document.getElementById("viewBids");
export const myProfileApi = api + profiles + "/" + name + "/media";
export const myBidsApi = api + profiles + "/" + name + "/bids?_listings=true";
export const loader = document.getElementById("loader");
export const currentDate = new Date();
export const twoHoursLater = currentDate.toISOString().slice(0, 16);
