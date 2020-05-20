const express = require("express");
const app = express();

app.get("/api/daily/", (req, res) => {
  res.send("Hello world from a Daily Trend Service!");
});

app.listen(3001, () => {
  console.log("Server is up on 3001");
});
