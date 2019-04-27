'use strict';

const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({debug: true});

app.intent('ColorChecker', (conv, {imageStr}) => {
  conv.close(`The product is`);
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);