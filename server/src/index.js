// server/index.js

const express = require('express');
const app = express();

const api = require("./api");
app.use('/api', api); // Mount the API routes from api.js at the /api base path

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
