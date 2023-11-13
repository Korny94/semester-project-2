import { getListings } from "./listings.js";
import { api, listings, listingsDiv, myName } from "../consts/consts.js";

localStorage.setItem("name", myName);

const allListingsApi = api + listings + "?_seller=true&_bids=true";

getListings(allListingsApi, listingsDiv);
