var mqtt = require("mqtt");

options = {
  clientId: "mqttx_3a88bb66",
  username: "shreenidhi",
  password: "8050102193",
  clean: true,
};

var client = mqtt.connect("mqtt://dht11@broker.emqx.io/1883", options);

var message = "test message";
var topic = "esp8266/test";
//publish every 5 secs
// var timer_id = setInterval(function () {
//   publish(topic, message, options);
// }, 5000);

// //publish function
// function publish(topic, msg, options) {
//   console.log("publishing", msg);
// }

client.on("connect", () => {
  client.subscribe(topic, { qos: 0 });
});

client.on("message", function (topic, message, packet) {
  console.log("message is " + message);
  console.log("topic is " + topic);
});

module.exports = message;
