// Values for PostgreSQL connection:
const pg_config = {
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '123456789',
  database: 'debt-manager',

  // Optional:
  // max: 20, // maximum number of clients in the pool
  // idleTimeoutMillis: 1000, // how long a client is allowed to remain idle before being closed
  // connectionTimeoutMillis: 2000 // how long to wait in milliseconds when trying to connect a new client before timing out
};

// admin account info that will be used for initializing the application:
const admin_acc = {
  id: 'admin', // shenase karbari baraye login
  password: 'admin', // ramz morede estefade baraye login
  name: 'Hesabdar', // This is OPTIONAL; The system will use this to say welcome :)
  type: 'ADMIN' // The account type determines the access level of the account.
};

// You should set the address of the client app to enable the server response to get requests.
const client_conf = {
  address: 'http://localhost:3000'
}

module.exports = {
  client_conf,
  pg_config,
  admin_acc
};