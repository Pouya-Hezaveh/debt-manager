const { pg_config } = require('../../config/pg.config');
const pg = require('pg');
async function runQuery(the_query) {
  const client = new pg.Client(pg_config);

  await client.connect();

  res = await client.query(the_query);

  const response = await JSON.stringify(res.rows).replace(/\s/g, '');

  client.end()

  return response
}

async function getUserById(id) {
  const response = await runQuery(`SELECT * FROM "USER" WHERE id = '${id}'`);
  console.log("$$$ db response to pgClient.getUserById(): ", JSON.parse(response))
  if (response.length <= 2)
    return null
  else
    return JSON.parse(response)[0]
}

async function isPasswordCorrect({ id, password }) {
  const response = await runQuery(`SELECT password FROM "USER" WHERE id = '${id}'`);
  console.log("$$$ db response to pgClient.isPasswordCorrect(): ", JSON.parse(response))
  if (response.length > 2 && JSON.parse(response)[0].password == password)
    return true
  else
    return false
}

async function isAdmin({ id, password }) {
  const response = await runQuery(`SELECT type FROM "USER" WHERE id = '${id}' and password = '${password}'`);
  console.log("$$$ db response to pgClient.isAdmin(): ", JSON.parse(response))
  if (response.length > 2 && JSON.parse(response)[0].type == 'ADMIN')
    return true
  else
    return false
}

async function insertValues(table_name, values) {
  const columns = Object.keys(values).join(', ');
  const columnValues = Object.values(values).map(value => `'${value}'`).join(', ');

  const response = await runQuery(`
    INSERT INTO "${table_name}" (${columns}) VALUES (${columnValues});
  `);
  console.log("$$$ db response to insertValues(): ", JSON.parse(response));
  return JSON.parse(response);
}

async function insertValues(table_name, values) {
  const columns = Object.keys(values).join(', ');
  const columnValues = Object.values(values).map(value => `'${value}'`).join(', ');

  try {
    const response = await runQuery(`
      INSERT INTO "${table_name}" (${columns}) VALUES (${columnValues});
    `);
    console.log(`$$$ ${columnValues} successfully added to table ${table_name}: `, JSON.parse(response));
    return JSON.parse(response);
  } catch (error) {
    if (error.code === '23505') {
      console.log('Primary key conflict: The record already exists.');
      // Handle the conflict as needed
      return { error: 'Primary key conflict' };
    } else {
      // Handle other types of errors
      console.error('Error inserting values:', error);
      throw error;
    }
  }
}

async function deleteRow(table_name, key) {
  try {
    const response = await runQuery(`
      DELETE FROM "${table_name}" WHERE id = '${key}';  -- Replace 'id' with the actual primary key column
    `);
    console.log(`$$$ Row with key ${key} deleted from table ${table_name}: `, JSON.parse(response));
    return JSON.parse(response);
  } catch (error) {
    console.error('Error deleting row:', error);
    throw error;
  }
}

async function getColumnNames(table_name) {
  const response = await runQuery(
    `
      SELECT column_name
      FROM information_schema.columns
      WHERE table_name = '${table_name}';
    `
  );
  console.log("$$$ db response to pgClient.getColumnNames(): ", JSON.parse(response));
  return JSON.parse(response).map(item => item.column_name)
}

async function getTable(table_name) {
  const response = await runQuery(`SELECT * FROM "${table_name}"`);
  console.log(`$$$ db response to pgClient.getTable(${table_name}): `, JSON.parse(response));
  return JSON.parse(response)
}

module.exports = {
  isPasswordCorrect,
  getColumnNames,
  insertValues,
  getUserById,
  deleteRow,
  runQuery,
  getTable,
  isAdmin
};