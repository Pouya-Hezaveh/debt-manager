const express = require('express');
const app = express();

// Enable to receive requests:
app.use(express.json());
const cors = require('cors');
const { client_conf } = require('../../config/pg.config')
app.use(
    cors({
        origin: client_conf.address,
        credentials: true,
    })
);

//----------Utility---Functions-------------------------------------------------
function getTableWithColumnNames(table_name) {
    return new Promise((resolve, reject) => {
      let table = {};
      Promise.all([
        askDataBase.getColumnNames(table_name),
        askDataBase.getTable(table_name)
      ]).then(([columnNames, rows]) => {
        table.columnNames = Object.values(columnNames);
        table.rows = rows;
        console.log("within getTableWithColumnNames(): ", table);
        resolve(table); // Resolve the Promise with the table object
      }).catch(error => {
        // Handle any errors here
        console.error(error);
        reject(error); // Reject the Promise if there's an error
      });
    });
  }


const crypto = require('crypto');
  function getRandomUUID(){
    return crypto.randomUUID()
  }

//------------------------------------------------------------------------------
const askDataBase = require('./pgClient');

app.post('/login', function (req, res) {

    console.log("### login request:", req.body);
    // checks the database if such user does exist.
    askDataBase.isPasswordCorrect(req.body).then((answer) => {
        // send the account info to the client if the password is incorrect.
        if (answer === true) {
            console.log(">>> Password is correct :)");
            askDataBase.getUserById(req.body.id).then((r) => res.send(r))
        }
        // else send null to the client
        else {
            console.log(">>> Password is incorrect :X");
            res.send('null')
        }
    });
})

app.post('/create-user', function (req, res) {
    // req.body.key must be like: {id: "", password: ""}
    if (askDataBase.isAdmin(req.body.key)) {
        // req.body.newAccount must be like: {name: "", password: "", name: "", type: ""}
        askDataBase.insertValues('USER', req.body.newAccount).then((r) =>res.send(r))
    }
})

app.post('/get-users', function (req, res) {
    // req.body.key must be like: {id: "", password: ""}
    if (askDataBase.isAdmin(req.body.key)) {
        getTableWithColumnNames('USER').then((r) => res.send(r))
    }
});

app.post('/delete-user', function (req, res) {
    // req.body.key must be like: {id: "", password: ""}
    if (askDataBase.isAdmin(req.body.key)) {
        askDataBase.deleteRow('USER',req.body.id).then((r) => res.send(r))
    }
});

app.post('/create-bill', function (req, res) {
    // req.body.key must be like: {id: "", password: ""}
    if (askDataBase.isAdmin(req.body.key)) {
        const crypto = require('crypto');
        console.log(crypto.randomUUID());

        // req.body.newDate must be like: {id: "(uuid)", password: "", name: "", type: ""}
        askDataBase.insertValues('DATE', req.body.newDate).then((r) =>res.send(r))

        // req.body.newBill must be like: {name: "", password: "", name: "", type: ""}
        askDataBase.insertValues('BILL', req.body.newBill).then((r) =>res.send(r))
    }
})

app.post('/create-bill', function (req, res) {
    // req.body.key must be like: {id: "", password: ""}
    if (askDataBase.isAdmin(req.body.key)) {
        getTableWithColumnNames('BILL').then((r) => res.send(r))
    }
});

app.post('/get-bills', function (req, res) {
    // req.body.key must be like: {id: "", password: ""}
    if (askDataBase.isAdmin(req.body.key)) {
        getTableWithColumnNames('BILL').then((r) => res.send(r))
    }
});

app.get("/", (req, res) => {
    res.send("<h1>THIS IS THE MAIN API ROOT.</h1>");
    console.log(" * new API root request!");
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
    console.log(" * new API request!");
});

module.exports = app;