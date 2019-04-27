const APIKeys = require("./API-keys.js");
const Clarifai = require("clarifai");

const app = new Clarifai.App({
  apiKey: APIKeys.Clarifai
});

const handleApiCall = (req, res) => {
  app.models
    .predict(Clarifai.COLOR_MODEL, req.body.input)
    .then(data => {
      res.json(data.outputs[0].data.colors);
    })
    .catch(err => res.status(400).json("unable to work with API. "));
};

module.exports = {
  handleApiCall
};
