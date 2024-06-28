const express = require('express');
const router = require('./router'); // Import the router module

// Import required modules

// Create an Express application
const app = express();

// Use the router for all API routes
app.use('/api', router);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});