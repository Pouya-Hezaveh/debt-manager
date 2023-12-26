// server/index.js

const express = require('express');
const app = express();

const api = require("./api");
app.use('/api', api); // Mount the API routes from api.js at the /api base path

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const pool = require('./config/db');
async function runQuery(the_query) {
  const client = await pool.connect();
  try {
    const relation = await client.query(query);
    console.log('The Fetched Relation From DB');
    console.log(relation.rows);
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
}
