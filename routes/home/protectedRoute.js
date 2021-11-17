const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifyToken");

router.get("/", verifyToken, (req, res) => {
  res.send("welcome to protected route");
});

module.exports = router;
