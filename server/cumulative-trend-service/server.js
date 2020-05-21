const express = require("express");
const app = express();

app.get("/api/cumulative", (req, res) => {
  res.send("Hello world from a Cumulative Trend Service!");
});

app.listen(3001, () => {
  console.log("Server is up on 3001");
});
