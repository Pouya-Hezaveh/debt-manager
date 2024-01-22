// server/index.js

const express = require('express');
const app = express();

// Setting up application programming interface:
const api = require("./api");
app.use('/api', api); // Mount the API routes from api.js at the /api base path

// Running the server:
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

/* The template for calling queries
(async()=>{
  const result = await  runQuery(`SELECT * FROM "USER"`);
  console.log(JSON.parse(result));
})();
*/
