const BearTool = require("../common/helper/BearTool");
const db = require("../datasource/MongoDataSource");
const urlRepo = require("../repository/UrlRepo");

module.exports.gen = (req, res) => {
  console.log(req.body);
  let record = {
    url: null,
    hash: null,
    createAt: new Date().getMilliseconds,
  };
  record.url = req.body.url;
  record.hash = BearTool.generateShortURL(req.body.url, 0, 5);

  db.client.db("ShortURL").collection("Url").insertOne(record);
  const result = db.client.db("ShortURL").collection("Url").find({});
  const deletes = { url: "facebook.com" };
  //   db.client.db("ShortURL").collection("Url").deleteMany(deletes);
  result.toArray((err, data) => {
    console.log(data);
  });

  res.send("Hash: " + record.hash);
  // res.send(req.body);
};

module.exports.getOriginalUrl = async (req) => {
  let record = {
    hash: null,
  };
  record.hash = req.params.id;

  const result = await urlRepo.findUrl(record);
  if (result != null){
      return result.url;
  } else {
      return null;
  }
};
