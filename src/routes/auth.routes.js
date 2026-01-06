const express = require("express");
const router = express.Router();

router.post("/google", (req, res) => {
  res.json({ message: "Auth route placeholder" });
});

module.exports = router;
