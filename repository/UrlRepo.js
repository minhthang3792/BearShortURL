const db = require("../datasource/MongoDataSource");

module.exports.findUrl = async (url) => {
  const result = await db
    .getClient()
    .collection("Url")
    .findOne(url)
    .then((item) => {
      console.log(item);
      return item;
    });
  if (result == null){
      return null;
  } else {
      return result;
  }
};
