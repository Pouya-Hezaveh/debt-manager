const pg_config = require('../config/pg.js');
const pg = require('pg');
async function runQuery(the_query) {
  const client = new pg.Client(pg_config);

  await client.connect();

  res = await client.query(the_query);

  const response = await JSON.stringify(res.rows).replace(/\s/g, '');

  client.end()

  return response
};

async function getUserById(id) {
  const response = await runQuery(`SELECT * FROM "USER" WHERE id = '${id}'`);
  console.log("$$$ db response to pgClient.getUserById(): ", response)
  if (response.length <= 2)
    return null
  else
    return JSON.parse(response)[0]
}

async function isPasswordCorrect(id, password) {
  const response = await runQuery(`SELECT password FROM "USER" WHERE id = '${id}'`);
  console.log("$$$ db response to pgClient.isPasswordCorrect(): ", response)
  if (response.length > 2 && JSON.parse(response)[0].password == password)
    return true
  else
    return false
}

module.exports = {
  isPasswordCorrect,
  getUserById,
  runQuery
};