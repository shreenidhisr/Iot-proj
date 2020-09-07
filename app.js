var express = require("express");
var app = express();
const path = require("path");
const nodemailer = require("nodemailer");
const mqtt = require("./paho_client");

var msg = mqtt.message;
// app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

let fromMail = "deshpandeshreenidhi244@gmail.com";
let toMail = "shreenidhics.cs18@rvce.edu.in";
let subject = "Container is leaking";
let text = "The level of your container is decreasing ,please once verify";

app.get("/", (req, res) => {
  res.render("index.pug", { title: "Hey", message: "Hello there!" });
});

app.get("/home", (req, res) => {
  res.render("home.pug", { title: "Hey", message: "Hello there!" });
});

app.get("/dashboard", (req, res) => {
  res.render("dash.pug", { msg: mqtt.message });
});

app.listen(4000);

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//       user: fromMail ,
//       pass: '8050102193'
//   }
//   });

// // email options
// let mailOptions = {
//   from: fromMail,
//   to: toMail,
//   subject: subject,
//   text: text
//   };

// send email
// transporter.sendMail(mailOptions, (error, response) => {
//   if (error) {
//       console.log(error);
//   }
//   console.log(response)
//   });
