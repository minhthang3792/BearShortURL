const crypto = require("crypto");
const shortId = require("shortid");
module.exports.generateShortURL = (longURL) => {
  const startIndex = 0;
  const endIndex = 5;
  const hash = crypto.createHash("md5").update(longURL).digest("utf8");
  let base = Buffer.from(hash).toString("base64");
  const idGen = shortId.generate();
  base = base.replace(/[-_&\/\\#,+()$~%.'":*?<>{}]/g, idGen.charAt(0));
  return base.substring(startIndex, endIndex + 1);
};
