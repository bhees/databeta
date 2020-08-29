import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/api/auth/signin/";


export function authUser(authObj) {
  return fetch(baseUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(authObj)
  })
    .then(handleResponse)
    .catch(handleError);
}
