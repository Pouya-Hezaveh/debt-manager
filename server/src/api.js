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
function getTableWithColumns(table_name) {
    let table = {}; // Use let instead of var to properly scope the variable
    Promise.all([
        askDataBase.getColumnNames(table_name),
        askDataBase.getTable(table_name)
    ]).then(([columns, rows]) => {
        table.columns = columns;
        table.rows = rows;
        res.send(table);
        console.log(table);
    }).catch(error => {
        // Handle any errors here
        console.error(error);
        res.status(500).send("Internal Server Error");
    });
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
    if (askDataBase.isItAdmin(req.body.key)) {
        // req.body.newAccount must be like: {name: "", password: "", name: "", type: ""}
        askDataBase.insertValues('USER', req.body.newAccount)
    }
})

app.post('/get-users', function (req, res) {
    // req.body.key must be like: {id: "", password: ""}
    if (askDataBase.isItAdmin(req.body.key)) {
        getTableWithColumns('USER').then()
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