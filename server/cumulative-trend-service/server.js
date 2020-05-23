const express = require("express");
const app = express();

app.get("/api/cumulative", (req, res) => {
  res.status(200).send("Hello world from a Cumulative Trend Service!");
});

app.listen(80, () => {
  console.log("Server is up on 80");
});
