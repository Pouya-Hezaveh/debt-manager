const pg_config = require('../config/pg.js');
const pg = require('pg');
async function runQuery(the_query) {
  const pool = new pg.Pool(pg_config);
  return new Promise((resolve) => {
    pool.connect((err, client, done) => {
      if (err) throw err;
      client.query(the_query, (err, res) => {
        client.end();
        pool.end();
        if (err)
          console.log(err.stack);
        else {
          //  res.rows is the SQL response.
          response = JSON.stringify(res.rows).replace(/\s/g, '');
          console.log("#", response);
          resolve(response)
        }
      })
    })
  })
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
