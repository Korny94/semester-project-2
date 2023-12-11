import { api, profiles, token } from "../consts/consts.js";

export async function updateCredits() {
  try {
    const updateCreditsData = {
      method: "PUT",
      body: JSON.stringify({
        credits: localStorage.getItem("credits"),
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(
      api + profiles + "/" + localStorage.getItem("name"),
      updateCreditsData
    );
    const json = await response.json();
  } catch (error) {
    console.error(error);
  }
}
