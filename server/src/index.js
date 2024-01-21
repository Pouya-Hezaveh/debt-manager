// server/index.js

const express = require('express');
const app = express();

// Initializing:
const cors = require('cors');
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json());

// Setting up application programming interface:
const api = require("./api");
app.use('/api', api); // Mount the API routes from api.js at the /api base path

// Setting up the database interface:
const { runQuery } = require('./pgClient');

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
