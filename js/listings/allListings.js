import { getListings } from "./listings.js";
import {
  api,
  listings,
  listingsDiv,
  myName,
  arrowLeftAll,
  arrowRightAll,
} from "../consts/consts.js";

localStorage.setItem("name", myName);

const allListingsApi = api + listings + "?_seller=true&_bids=true";

getListings(allListingsApi, listingsDiv);

arrowLeftAll.addEventListener("click", () => {
  listingsDiv.style.scrollBehavior = "smooth";
  listingsDiv.scrollLeft -= 500;
});

arrowRightAll.addEventListener("click", () => {
  listingsDiv.style.scrollBehavior = "smooth";

  listingsDiv.scrollLeft += 500;
});
