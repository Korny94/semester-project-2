import { getListings } from "./listings.js";
import { api, myListingsDiv, profiles, loader } from "../consts/consts.js";

const myListingsApi =
  api +
  profiles +
  "/" +
  localStorage.getItem("name") +
  "/listings?_seller=true&_bids=true";
getListings(myListingsApi, myListingsDiv, "");
