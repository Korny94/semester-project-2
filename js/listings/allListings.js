import { getListings } from "./listings.js";
import {
  api,
  listings,
  listingsDiv,
  myName,
  search,
  searchBtn,
  searchInput,
  offcanvasTopClose,
} from "../consts/consts.js";

localStorage.setItem("name", myName);

const allListingsApi = api + listings + "?_seller=true&_bids=true";

const searchFunction = () => {
  const searchInputValue = searchInput.value;
  getListings(allListingsApi, listingsDiv, searchInputValue);
  offcanvasTopClose.click();
};

search.addEventListener("click", () => {
  searchBtn.addEventListener("click", () => {
    searchFunction();
  });
  searchInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchFunction();
    }
  });
});

getListings(allListingsApi, listingsDiv, "");
