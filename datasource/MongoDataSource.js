const MongoClient = require("mongodb").MongoClient;

const uri = "mongodb+srv://xpeter:RgrurOAR0SiGbFzS@cluster0.ze4vu.mongodb.net/";

let client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const init = async function () {
  try {
    console.log("Connecting to Mongodb");
    await client.connect();
    console.log("Mongodb connected");
    client = await client.db('ShortURL');
  } catch (e) {
    console.error("Error while connecting to Mongodb" + e);
  }
};

const getClient = () => {
  return client;
}
module.exports = {
  init,
  getClient,
};
