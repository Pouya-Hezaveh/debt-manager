const express = require('express');
const app = express();

// Define a route to handle the incoming data
app.post('/data-endpoint', (req, res) => {
    const receivedData = req.body;
    // Process the received data (e.g., save to a database)
    // Send back a response
    res.json({ message: 'Data received and processed successfully' });
});

app.get("/", (req, res) => {
    res.send("<h1>THIS IS THE MAIN ROOT.</h1>");
    console.log(" * new root request!");
});

app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
    console.log(" * new API request!");
});

module.exports = app;