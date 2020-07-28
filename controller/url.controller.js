const urlService = require("../service/UrlService");

module.exports.hashUrl = async (req, res) => {
  const result = await urlService.hashUrl(req);
  res.send(result);
};

module.exports.getOrginalUrl = async (req, res) => {
  const result = await urlService.getOriginalUrl(req);
  if (result == null) {
    res.status(404).send("not found");
  } else {
    res.redirect(result);
  }
};
