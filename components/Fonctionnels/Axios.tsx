import axios from "axios";
import cookie from "js-cookie";

export default axios.create({
  baseURL: "https://phidbac.fr:4000/",
  responseType: "json",
  headers: {
    Authorization: cookie.get("token")?.replace("Bearer%20", "Bearer ")
  }
});
