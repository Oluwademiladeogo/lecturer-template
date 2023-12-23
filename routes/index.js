const express = require("express");
const { handler } = require("../controller");
const router = express.Router();
router.get("*", async(req, res) => {
    res.send(await handler(req, "GET"))
});
router.post("*", async(req, res) => {
  res.send(await handler(req, "POST"))
});
module.exports = router;
