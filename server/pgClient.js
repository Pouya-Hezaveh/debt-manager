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

module.exports = runQuery;