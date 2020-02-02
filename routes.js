const routes = require("next-routes");

module.exports = routes()
  .add({
    name: "Presentation-du-programme-et-des-epreuves",
    page: "Programme"
  })
  .add({ name: "Liste-des-index", page: "Indexes" });
