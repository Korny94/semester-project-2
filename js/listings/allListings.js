import { getListings } from "./listings.js";
import {
  api,
  listings,
  listingsDiv,
  myName,
  arrowLeftAll,
  arrowRightAll,
  search,
} from "../consts/consts.js";

localStorage.setItem("name", myName);

const allListingsApi = api + listings + "?_seller=true&_bids=true";

search.addEventListener("click", () => {
  const searchPrompt = prompt("Search for a listing");
  console.log(searchPrompt);
  getListings(allListingsApi, listingsDiv, searchPrompt);
});

getListings(allListingsApi, listingsDiv, "");

arrowLeftAll.addEventListener("click", () => {
  listingsDiv.style.scrollBehavior = "smooth";
  listingsDiv.scrollLeft -= 500;
});

arrowRightAll.addEventListener("click", () => {
  listingsDiv.style.scrollBehavior = "smooth";

  listingsDiv.scrollLeft += 500;
});
