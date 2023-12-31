import { getListings } from "./listings.js";
import {
  api,
  myListingsDiv,
  profiles,
  arrowLeftMy,
  arrowRightMy,
  loader,
} from "../consts/consts.js";

const myListingsApi =
  api +
  profiles +
  "/" +
  localStorage.getItem("name") +
  "/listings?_seller=true&_bids=true";
getListings(myListingsApi, myListingsDiv, "");

arrowLeftMy.addEventListener("click", () => {
  myListingsDiv.style.scrollBehavior = "smooth";
  myListingsDiv.scrollLeft -= 500;
});

arrowRightMy.addEventListener("click", () => {
  myListingsDiv.style.scrollBehavior = "smooth";

  myListingsDiv.scrollLeft += 500;
});
