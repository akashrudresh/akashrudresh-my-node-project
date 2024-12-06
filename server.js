const express = require('express');
const path = require('path');

const app = express();

// Serve static files (images, CSS, JavaScript) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // Send the HTML file
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
    