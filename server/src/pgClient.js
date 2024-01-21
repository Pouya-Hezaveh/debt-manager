const pg_config = require('../config/pg.js');
const pg = require('pg');
const { response } = require('./api.js');
async function runQuery(the_query) {
    const client = new pg.Client(pg_config);

    await client.connect();

    res = await client.query(the_query);

    const response = await JSON.stringify(res.rows).replace(/\s/g, '');
    console.log(response)

    client.end()

    return response
};

async function isPasswordCorrect(id, password) {
  const response = await runQuery(`SELECT password FROM "USER" WHERE id = '${id}'`);
  if (JSON.parse(response)[0].password === password)
    return true
  else
    return false
}

module.exports = {
  isPasswordCorrect,
  runQuery
};