const APIKeys = require("./API-keys.js");
const Clarifai = require("clarifai");

const app = new Clarifai.App({
  apiKey: process.env.API_CLARIFAI
});

const handleApiCall = (req, res) => {
  const url = mapimgToURL(req.body);
  app.models
    .predict(Clarifai.COLOR_MODEL, url)
    .then(data => {
      res.json(data.outputs[0].data.colors);
    })
    .catch(err => res.status(400).json("unable to work with API. "));
};

const mapimgToURL = img => {
  return images[img];
};

const images = {
  image1:
    "http://andb.info/wp-content/uploads/2018/11/blue-chair-blessing-lounge-blue-chair-blessing-images.jpg",
  image2:
    "https://www.dhresource.com/0x0s/f2-albu-g4-M01-E0-7B-rBVaEVgWspSAJaWGAACxt1ZQ9rs536.jpg/wholesale-minimalist-bedding-sets-apple-green.jpg"
};

module.exports = {
  handleApiCall
};
