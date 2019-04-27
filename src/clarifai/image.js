const Clarifai = require("clarifai");

const app = new Clarifai.App({
  //apiKey: process.env.API_CLARIFAI
  apiKey: "744e8eb3e84c49cb9ea1e0fe79fc46c4"
});

const handleApiCall = (req, res) => {
  const url = images[req.body.input];
  app.models
    .predict(Clarifai.COLOR_MODEL, url)
    .then(data => {
      const color = data.outputs[0].data.colors[0].raw_hex;
      if (color === "#007efe") {
        res.end("G Flat");
      } else {
        res.end("F");
      }
    })
    .catch(err => res.status(400).json("unable to work with API. " + err));
};

const images = {
  image1: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Color-blue.JPG",
  image2: "https://www.tascsoftware.co.uk/wiki/INSIGHT/images/0/0e/Green.jpg"
};

module.exports = {
  handleApiCall
};
