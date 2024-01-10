const express = require('express');
const app = express();

// Define a route to handle the incoming data
app.post('/post', (req, res) => {
    console.log(" * new post API request!")
    const receivedData = req.body;
    // Process the received data (e.g., save to a database)
    // Send back a response
    res.json({ message: 'Data received and processed successfully' });
});
/*
    const askDataBase = require('./pgClient');
    askDataBase.isPasswordCorrect('1234567890', '0').then((r) => console.log(r));
*/

app.get("/", (req, res) => {
    res.send("<h1>THIS IS THE MAIN API ROOT.</h1>");
    console.log(" * new API root request!");
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
    console.log(" * new API request!");
});

module.exports = app;