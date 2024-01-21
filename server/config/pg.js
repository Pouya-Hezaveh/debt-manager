
const pg_config = {
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '123456789',
  database: 'debt-manager-test',
  // max: 20, // maximum number of clients in the pool
  // idleTimeoutMillis: 1000, // how long a client is allowed to remain idle before being closed
  // connectionTimeoutMillis: 2000 // how long to wait in milliseconds when trying to connect a new client before timing out
};

module.exports = pg_config