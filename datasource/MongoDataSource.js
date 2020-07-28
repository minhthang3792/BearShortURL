const MongoClient = require("mongodb").MongoClient;

const uri = "mongodb+srv://xpeter:RgrurOAR0SiGbFzS@cluster0.ze4vu.mongodb.net/";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const init = async function () {
  try {
    console.log("Connecting to mongodb");
    await client.connect();
    console.log("Mongodb connected");
    
  } catch (e) {
    console.error(e);
  }
};
module.exports = {
  init,
  client,
};
