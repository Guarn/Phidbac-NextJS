const next = require("next");
const routes = require("./routes");
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);
const http2 = require("http2");
const fs = require("fs");

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
// Without express
/*
const { createServer } = require("http2");
app.prepare().then(() => {
  createServer(handler).listen(7000);
});

app.prepare().then(() => {
  devcert
    .certificateFor("www.phidbac.fr", { installCertutil: true })
    .then(ssl => {
      https.createServer(ssl, handler).listen(7000, err => {
        if (err) throw err;
        // eslint-disable-next-line
        console.log(`> Ready on https://www.mysitelocal.com:${port}`);
      });
    });
});
*/
