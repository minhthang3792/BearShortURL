const express = require("express");
const product = require("./route/route");
const app = express();
const port = 1234;
const mongo = require("./datasource/MongoDataSource");

async function main() {
  await mongo.init();
  const mongoClient = mongo.client;
  await app.listen(port, () => {
    console.log("Server is up and running on port numner " + port);
  });
  app.use(express.json()); // for parsing application/json
  app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

  await app.use("/tool", product);
}

main();
