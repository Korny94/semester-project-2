import {
  credits,
  token,
  profilePage,
  api,
  profiles,
  myName,
  active,
  loader,
  search,
  listingsDiv,
  myListingsDiv,
} from "../consts/consts.js";
import { calculateTimeRemaining } from "../functions/functions.js";
import { placeBidEventListener } from "./placeBid.js";

credits.innerHTML = "$" + localStorage.getItem("credits");

if (token == "guest") {
  profilePage.classList.add("disabled");
}

if (active) {
  localStorage.setItem("name", myName);
  localStorage.setItem(
    "profileApi",
    api + profiles + "/" + myName + "?_listings=true"
  );
}
export async function getListings(listingsApi, divListings, searchPrompt) {
  try {
    const listingData = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(listingsApi, listingData);
    const json = await response.json();

    if (response.ok) {
      loader.style.display = "none";
    }

    divListings.innerHTML = "";
    json.forEach((listing) => {
      const jsonTags = listing.tags || [];
      const jsonTitle = listing.title || "";
      const jsonDescription = listing.description || "";

      // Ensure jsonDescription is not null before using .includes()
      if (
        jsonTitle.includes(searchPrompt) ||
        (jsonTags.length > 0 && jsonTags.includes(searchPrompt)) ||
        (jsonDescription && jsonDescription.includes(searchPrompt))
      ) {
        let bidsHTML = "";

        const bids = listing.bids ? listing.bids : [];
        bids.forEach((bid) => {
          const bidder = bid.bidderName;
          bidsHTML += `
          <div class="modal-comment border d-flex m-2 p-1 pb-3" style="border-radius: 10px">
              <div title="${bidder}" class="profileLink d-flex align-items-center">
                  <h6 class="modal-comment-name m-0 ms-3 mt-2">${bidder}:</h6>
              </div>
    
              <div class="m-2 mb-0 ms-4">
                  $${bid.amount}
              </div>
          </div>
          `;
        });

        const listingDiv = document.createElement("div");
        listingDiv.setAttribute("class", "listingDiv");
        const image = listing.media[0]
          ? listing.media[0]
          : "https://cdn.pixabay.com/photo/2017/10/26/17/37/auction-2891804_1280.jpg";
        const imageProfile = listing.seller.avatar
          ? listing.seller.avatar
          : "https://cdn.pixabay.com/photo/2017/02/16/12/01/professions-2071316_1280.jpg";
        const title = listing.title;
        const description = listing.description;
        const seller = listing.seller.name;
        const endsAt = listing.endsAt;
        const listingId = listing.id;

        const listingMessage = calculateTimeRemaining(endsAt);

        listingDiv.innerHTML += DOMPurify.sanitize(
          ` 
        <div class="modal d-flex position-relative" tabindex="-1">
            <div class="modal-dialog m-2 d-block">
            <div class="modal-content postModal">
                <div class="modal-header p-3">
                <div class="profileLink d-flex align-items-center" style="cursor: pointer" id="otherProfile_${seller}" title="${seller}">
                    <img class="modal-profile-image me-2" src="${imageProfile}" alt="" />
                    <h5 class="modal-name m-0">${seller}</h5>
                </div>
                </div>
                <div class="modal-image">
                  <img id="modalImage" src="${image}" alt="" />
                </div>
                <div class="modal-title mt-2" style="height: 1.5rem; overflow: hidden; cursor: pointer;">
                    <h5 class="text-center m-0"  title="${title}">${title}</h5>
                </div>
                <div class="modal-body" style="height: 5rem; overflow: scroll; line-height: 1rem;">
                    ${description}
                </div>
                <div class="modal-commentCount">
                    <h6 class="text-center" style="font-size: .85rem; opacity: .5">${listingMessage}</h6>
                </div>
                <div class="modal-comments">
                    ${bidsHTML}
                </div>
                <div class="modal-footer mb-1 d-flex align-items-center justify-content-center">
                <input type="number" class="form-control" id="bidAmount_${listingId}" placeholder="Place bid" style="width: 60%" />
                <button type="button" class="btn btn-primary" title="${listingId}" id="bidBtn_${listingId}" style="width: 30%">Bid</button>
                </div>
            </div>
        </div>
      </div>`
        );
        divListings.appendChild(listingDiv);
        const modalComments = listingDiv.querySelector(".modal-comments");
        modalComments.scrollTop = modalComments.scrollHeight;

        const theirProfile = listingDiv.querySelector(
          `#otherProfile_${seller}`
        );
        theirProfile.addEventListener("click", () => {
          if (
            token == "guest" ||
            token == null ||
            token == undefined ||
            token == ""
          ) {
            alert("You must be logged in to view profiles");
            return;
          } else {
            localStorage.setItem(
              "profileApi",
              api + profiles + "/" + seller + "?_listings=true"
            );
            localStorage.setItem("name", seller);
            location.href = "../../html/myProfile.html";
          }
        });
        placeBidEventListener(listingId);
      }
    });
    if (divListings.innerHTML == "") {
      loader.style.display = "block";
      setTimeout(() => {
        loader.style.display = "none";
        divListings.innerHTML = "<h2>No results found</h2>";
      }, 2000);
    }
  } catch (error) {
    listingsDiv.innerHTML =
      "<h2>Oops, something went wrong.. Please try again!</h2>";
    loader.style.display = "none";
    console.error(error);
  }
}
