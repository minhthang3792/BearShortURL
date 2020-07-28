const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Url = new Schema({
  url: { type: String, required: true },
});

module.exports = mongoose.model('Url', Url);