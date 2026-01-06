const express = require("express");
const router = express.Router();

router.post("/upload", (req, res) => {
  res.json({ message: "Document upload placeholder" });
});

module.exports = router;
