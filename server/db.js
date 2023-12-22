const { Pool } = require("pg");

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '12345678',
  database: 'debt-manager-test'
})

module.exports = {
  query: (text, params) => pool.query(text, params)
};
