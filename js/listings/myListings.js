import { getListings } from "./listings.js";
import { api, myListingsDiv, profiles } from "../consts/consts.js";

const myListingsApi =
  api +
  profiles +
  "/" +
  localStorage.getItem("name") +
  "/listings?_seller=true&_bids=true";
console.log(myListingsDiv);
getListings(myListingsApi, myListingsDiv);
