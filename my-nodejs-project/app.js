const express = require('express');
const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static('public'));

// A simple route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
