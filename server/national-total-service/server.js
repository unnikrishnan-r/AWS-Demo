const express = require("express");
const app = express();

app.get("/api/national/", (req, res) => {
  res.send("Hello world from a National Total Service!");
});

app.listen(3003, () => {
  console.log("Server is up on 3003");
});
