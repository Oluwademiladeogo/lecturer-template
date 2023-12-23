const express = require("express");
const { handler } = require("./controller");
const app = express();
app.use(express.json());

app.post("*", async (req, res) => {
  res.send(await handler(req, "POST"));
});
app.get("*", async (req, res) => {
  res.send(await handler(req, "GET"));
});
module.exports = app;
