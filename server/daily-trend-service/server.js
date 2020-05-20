const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world from a Daily Trend Service!");
});

app.listen(3002, () => {
  console.log("Server is up on 3002");
});
