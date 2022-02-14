var express = require("express");
var redis = require("redis");
//var process = require("process");

var app = express();

var client = redis.createClient({
  host: "redis-server",
  port: 6379,
});
client.set("visits", 1);

app.get("/", (req, res) => {
  //process.exit(0);
  client.get("visits", (err, visits) => {
    res.send("Visit Counts => " + visits);

    client.set("visits", parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log("Localhost listening on port 8081");
});
