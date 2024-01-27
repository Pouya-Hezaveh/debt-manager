const express = require('express');
const app = express();

// Enable to receive requests:
app.use(express.json());
const cors = require('cors');
app.use(
    cors({
        origin: 'http://localhost:3001',
        credentials: true,
    })
);

//------------------------------------------------------------------------------
const askDataBase = require('./pgClient');

app.post('/login', function (req, res) {
    
    console.log("### login request:", req.body);
    // checks the database if such user does exist.
    askDataBase.isPasswordCorrect(req.body.id, req.body.password).then((answer) => {
        // send the account info to the client if the password is incorrect.
        if(answer === true){
            console.log(">>> Password is correct :)");
            askDataBase.getUserById(req.body.id).then((r) => res.send(r))
        }
        // else send null to the client
        else{
            console.log(">>> Password is incorrect :X");
            res.send('null')
        }
    });
})

app.get("/", (req, res) => {
    res.send("<h1>THIS IS THE MAIN API ROOT.</h1>");
    console.log(" * new API root request!");
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
    console.log(" * new API request!");
});

module.exports = app;