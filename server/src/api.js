const express = require('express');
const app = express();

// Enable to receive mail requests:
app.use(express.json());
const cors = require('cors');
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
);

const askDataBase = require('./pgClient');
app.post('/login', function (req, res) {
    console.log("### login request:", req.body);
    res.send("x")
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