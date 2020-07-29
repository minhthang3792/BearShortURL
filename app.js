const express = require("express");
const route = require("./route/route");
const homeRoute = require("./route/home.route");
const app = express();
const port = 1234;
const mongo = require("./datasource/MongoDataSource");

async function main() {
  await mongo.init();
  const mongoClient = mongo.client;
  await app.listen(port, () => {
    console.log("Server is up and running on port numner " + port);
  });
  app.set("view engine", "pug");
  app.set("views", "views");
  app.use(express.json()); // for parsing application/json
  app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  app.use(express.static("public"));

  app.use("/tool", route);
  app.use("", homeRoute);
}
main();
