// server/index.js

const express = require('express');
const app = express();

const api = require("./api");
app.use('/api', api); // Mount the API routes from api.js at the /api base path

app.get('/post', (req, res) => {
  console.log(" * new post API request!")
  const receivedData = req.body;
  // Process the received data (e.g., save to a database)
  // Send back a response
  res.json({ message: 'Data received and processed successfully' });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

