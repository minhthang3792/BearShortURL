const BearTool = require("../common/helper/BearTool");
const db = require("../datasource/MongoDataSource");
const { ReplSet } = require("mongodb");

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

module.exports.hash = async (req, res) => {
  const record = {
    hash: null,
  };
  record.hash = req.params.id;
  console.log(record);
  let result2 = null;
  const result = db.client.db("ShortURL").collection("Url").find({});
  result.toArray((err, data) => {
    console.log(data);
  });
  await db.client
    .db("ShortURL")
    .collection("Url")
    .findOne({hash:'I0PseK'}, (err, item)=>{
        console.log(item.url);
        res.redirect(item.url);
    })
    console.log(result2);
//   await res.redirect(result[0].url);
};
