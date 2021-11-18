const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifyToken");
const verifyAdmin = require("../middleware/verifyAdmin");

router.get("/", verifyToken, verifyAdmin, (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the protected route",
    data: { user: req.body.user },
  });
});

module.exports = router;
