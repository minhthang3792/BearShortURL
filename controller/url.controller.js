const urlService = require("../service/UrlService");

module.exports.hashUrl = (req, res) => {
  res.send("Success");
};

module.exports.getOrginalUrl = async (req, res) => {
  const result = await urlService.getOriginalUrl(req);
  console.log("controller: " + result);
  if (result == null) {
    res.status(404).send("not found");
  } else {
    res.redirect(result);
  }
};
