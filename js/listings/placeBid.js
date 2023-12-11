import { api, listings, token } from "../consts/consts.js";
import { updateCredits } from "../profile/myCredits.js";

export async function placeBid(listingId, bid) {
  try {
    const placeBidData = {
      method: "POST",
      body: JSON.stringify({
        amount: bid,
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(
      api + listings + "/" + listingId + "/bids",
      placeBidData
    );
    const json = await response.json();
    if (json.errors) {
      alert(json.errors[0].message);
    }
    if (response.ok) {
      const creditAmount = localStorage.getItem("credits");
      localStorage.setItem("credits", creditAmount - bid);
      updateCredits();
      setTimeout(() => {
        location.reload();
      }, 200);
    }
  } catch (error) {
    console.error(error);
  }
}

export function placeBidEventListener(listingId) {
  const bidBtn = document.querySelector(`#bidBtn_${listingId}`);
  const bidAmount = document.querySelector(`#bidAmount_${listingId}`);

  bidBtn.addEventListener("click", () => {
    if (token == "guest") {
      alert("You must be logged in to place a bid");
    } else {
      placeBid(listingId, parseInt(bidAmount.value));
    }
  });
}
