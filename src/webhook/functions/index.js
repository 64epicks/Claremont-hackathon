'use strict';

const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({debug: true});

app.intent('make_name', (conv, {imageStr}) => {
   var imageName = "";
   if(imageStr == "first")
   {
     imageName = "image1";
   }
   else
   {
     imageName = "image2";
   }

   fetch("http://64epicks.com:8080(imageurl", {
     method: "post",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify({
       input: imageName
     })
   })
   .then(data => {
     conv.close(`To listen to the soundscape, say Ok google play a ${data}`);
  });
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
