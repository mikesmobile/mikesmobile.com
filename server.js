const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");
require("dotenv").config();

const port = process.env.PORT || 8080
const app = express();

const CORS_ORIGIN = ["https://mikesmobile.com", "https://www.mikesmobile.com", "http://localhost:8080/"];

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Mail

app.use('/', express.static('dist/browser'))

const auth = {
    auth: {
        api_key: process.env.MAILGUN_KEY,
        domain: process.env.MAILGUN_DOMAIN
    }
};
const transporter = nodemailer.createTransport(mg(auth));

const sendMail = (req, res) => {
    let contactMethod = "No preferred contact method";
    if (req.body.contactMethod) {
        contactMethod = req.body.contactMethod;
    }
    const fakeBody = {
        email: 'webdesigner.mikesmobile@gmail.com',
        name: 'Quinn',
        city: 'Sacramento',
        phone: '9168896431',
        message: 'Hello',
        option: 'Yes',
        utm_campaign: 'campaign man',
        utm_source: 'helo',
        utm_medium: 'text'
    }
    // No other validation needed
    const mailOptions = {
        from: "Quote Form <office@mikesmobile.com>",
        to: "mikesmobilescreens@gmail.com",
        replyTo: fakeBody.email,
        subject: `Customer Contact - ${fakeBody.name}`,
        html: `<p>
      <ul>
        <li>Name: ${fakeBody.name} </li>
        <li>City: ${fakeBody.city}</li>
        <li>Phone: ${fakeBody.phone}</li>
        <li>E-mail: ${fakeBody.email}</li>
        <li>Message: ${fakeBody.message}</li>
        <li>Contact Method: ${contactMethod}</li>
        <li>Product/Service page: ${fakeBody.option}</li>
        <li>Campaign: ${fakeBody.utm_campaign}</li>
        <li>Source: ${fakeBody.utm_source}</li>
        <li>Medium: ${fakeBody.utm_medium}</li>
      </ul>
    </p>`
    };
    transporter.sendMail(mailOptions, (erro, info) => {
        if (erro) {
            res.status(500).send();
        }
        res.status(200).send({
            status: 'Success, (queued)'
        });
    });
};

app.post("/send", sendMail);

app.listen(port, () => {
    console.log('App listening on port: ' + port)
})
