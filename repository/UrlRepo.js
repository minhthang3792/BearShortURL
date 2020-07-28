const db = require("../datasource/MongoDataSource");

module.exports.findUrl = async (url) => {
  const result = await db
    .getClient()
    .collection("Url")
    .findOne(url)
    .then((item) => {
      return item;
    });
  if (result == null) {
    return null;
  } else {
    return result;
  }
};

module.exports.insert = (record) => {
  const result = db
    .getClient()
    .collection("Url")
    .insertOne(record)
    .then((data) => {
      console.log("Insert success");
      return true;
    })
    .catch((err) => {
      console.error("Insert error: " + err);
      return false;
    });
  return result;
};
