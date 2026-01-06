const express = require("express");

const authRoutes = require("./auth.routes");
const documentRoutes = require("./document.routes");

const router = express.Router();

// Route groups
router.use("/auth", authRoutes);
router.use("/documents", documentRoutes);

module.exports = router;
