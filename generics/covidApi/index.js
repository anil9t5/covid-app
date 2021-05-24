import axios from "axios"

export async function get(url) {
  return axios(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      return await response
    })
    .catch((err) => {
      console.log("err")
    })
}

export async function newsHighlight(url) {
  return fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "a982f0fdaamsh2336baeb3c02c75p1cb1e1jsn99eb01750c78",
      "x-rapidapi-host":
        "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
    },
  })
    .then(async (response) => {
      return await response.json()
    })
    .catch((err) => {
      console.error(err)
    })
}
