/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
  API_APIF2B5D1B3_APIID
  API_APIF2B5D1B3_APINAME
  ENV
  REGION
Amplify Params - DO NOT EDIT */

const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const nodemailer = require('nodemailer')
const mg = require("nodemailer-mailgun-transport");

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});




/**********************
 * Example get method *
 **********************/

app.get('/send', function (req, res) {
  // Add your code here
  res.json({ success: 'get call succeed!', url: req.url });
});

app.get('/send/*', function (req, res) {
  // Add your code here
  res.json({ success: 'get call succeed!', url: req.url });
});

/****************************
* Example post method *
****************************/

app.post('/send', function (req, res) {
  const auth = {
    auth: {
      api_key: process.env.MAILGUN_KEY,
      domain: process.env.MAILGUN_DOMAIN
    }
  };
  const transporter = nodemailer.createTransport(mg(auth));

  let contactMethod = "No preferred contact method";
  if (req.body.contactMethod) {
    contactMethod = req.body.contactMethod;
  }

  const mailOptions = {
    from: "Quote Form <office@mikesmobile.com>",
    to: "mikesmobilescreens@gmail.com",
    replyTo: req.body.email,
    subject: `Customer Contact - ${req.body.name}`,
    html: `<p>
    <ul>
      <li>Name: ${req.body.name} </li>
      <li>City: ${req.body.city}</li>
      <li>Phone: ${req.body.phone}</li>
      <li>E-mail: ${req.body.email}</li>
      <li>Message: ${req.body.message}</li>
      <li>Contact Method: ${contactMethod}</li>
      <li>Product/Service page: ${req.body.option}</li>
      <li>Campaign: ${req.body.utm_campaign}</li>
      <li>Source: ${req.body.utm_source}</li>
      <li>Medium: ${req.body.utm_medium}</li>
    </ul>
  </p>`
  };
  transporter.sendMail(mailOptions, (erro, info) => {
    if (erro) {
      res.status(500).send({
        status: erro
      });
    }
    res.status(200).send({
      status: 'Success, (queued)'
    });
  });
});

app.post('/send/*', function (req, res) {
  // Add your code here
  res.json({ success: 'post call succeed!', url: req.url, body: req.body })
});

/****************************
* Example put method *
****************************/

app.put('/send', function (req, res) {
  // Add your code here
  res.json({ success: 'put call succeed!', url: req.url, body: req.body })
});

app.put('/send/*', function (req, res) {
  // Add your code here
  res.json({ success: 'put call succeed!', url: req.url, body: req.body })
});

/****************************
* Example delete method *
****************************/

app.delete('/send', function (req, res) {
  // Add your code here
  res.json({ success: 'delete call succeed!', url: req.url });
});

app.delete('/send/*', function (req, res) {
  // Add your code here
  res.json({ success: 'delete call succeed!', url: req.url });
});

app.listen(3000, function () {
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
