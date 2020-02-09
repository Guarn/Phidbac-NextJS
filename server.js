const next = require("next");
const routes = require("./routes");
const app = next({
  dev: process.env.NODE_ENV !== "production",
  conf: { compress: false }
});
const handler = routes.getRequestHandler(app);
const https = require("https");
const fs = require("fs");
const http2 = require("http2");
/*
https
  .createServer(
    {
      key: fs.readFileSync("/etc/letsencrypt/live/phidbac.fr/privkey.pem"),
      cert: fs.readFileSync("/etc/letsencrypt/live/phidbac.fr/cert.pem"),
      ca: fs.readFileSync("/etc/letsencrypt/live/phidbac.fr/chain.pem")
    },
    handler
  )
  .listen(7000);
*/

http2
  .createSecureServer(
    {
      key: fs.readFileSync("/etc/letsencrypt/live/phidbac.fr/privkey.pem"),
      cert: fs.readFileSync("/etc/letsencrypt/live/phidbac.fr/cert.pem"),
      ca: fs.readFileSync("/etc/letsencrypt/live/phidbac.fr/chain.pem")
    },
    handler
  )
  .listen(7000);
