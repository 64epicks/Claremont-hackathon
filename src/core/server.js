const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const getChord = require("mapper")

//Controllers
const image = require("./clarifai/image");

const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());

const imageName = "image one";

const req = {
  input: getChord(imageName)
};

//End-points
app.get("/", (req, res) => {
  res.send("This is the ColorChecker server");
});
app.post(
  "/imageurl", 
  (req, res) => 
    image.handleApiCall(req, res).then((data) =>  { console.log(data)}));

// app.listen(3000, () => {
//   console.log(`app is running on port 3000`);
// });
