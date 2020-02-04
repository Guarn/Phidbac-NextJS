import axios from "axios";

export default axios.create({
  baseURL: "https://phidbac.fr:4000/",
  responseType: "json"
});
