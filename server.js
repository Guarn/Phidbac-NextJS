const next = require("next");
const app = next({
  dev: process.env.NODE_ENV !== "production"
});
const express = require("express");
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.all("*", (req, res) => {
    console.log("hum");

    return handler(req, res);
  });

  server.listen(7000, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
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
*/
