const next = require("next");
const fs = require("fs");
const { createServer } = require("https");
const { join } = require("path");
const { parse } = require("url");

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

    // handle GET request to /service-worker.js
    if (pathname === "/service-worker.js") {
      console.log("SERVICE WORKER");

      const filePath = join(__dirname, ".next", pathname);

      app.serveStatic(req, res, filePath);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(7000, () => {
    console.log(`> Ready on http://localhost:${7000}`);
  });
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
