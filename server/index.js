// server/index.js

const express = require("express");
const { env } = require("process");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>THIS IS THE MAIN WEBPAGE.</h1>");
  console.log(" * new root request!");
});
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
  console.log(" * new API request!");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
