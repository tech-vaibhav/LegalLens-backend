const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());

// Register API routes
app.use("/api", routes);

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "LegalLens Backend",
  });
});

module.exports = app;
