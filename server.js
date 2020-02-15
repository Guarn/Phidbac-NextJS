const next = require("next");
const fs = require("fs");
const { createServer } = require("https");
const { join } = require("path");
const { parse } = require("url");
const http = require("http");
const { createSecureServer } = require("http2");

const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();

const options = {
  key: fs.readFileSync("/etc/letsencrypt/live/phidbac.fr/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/phidbac.fr/cert.pem"),
  ca: fs.readFileSync("/etc/letsencrypt/live/phidbac.fr/chain.pem")
};

app.prepare().then(() => {
  createServer(options, (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;
    res.set("Cache-Control", "public, max-age=31557600");
    // handle GET request to /service-worker.js
    if (pathname === "/service-worker.js") {
      const filePath = join(__dirname, ".next", pathname);

      app.serveStatic(req, res, filePath);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(443, () => {});

  http
    .createServer(function(req, res) {
      res.writeHead(301, {
        Location: "https://" + req.headers["host"] + req.url
      });
      res.end();
    })
    .listen(80);
});
/*
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
