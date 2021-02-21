import axios from "axios";
import cookie from "js-cookie";

import getConfig from "next/config";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const apiUrl = serverRuntimeConfig.URI || publicRuntimeConfig.URI;

export default axios.create({
  baseURL: `${apiUrl}`,
  responseType: "json",
  headers: {
    authorization: cookie.get("token")?.substring(7) ?? "",
  },
});
