const express = require('express');
const router = require('./router'); // Import the router module
const { connectRedis } = require('./utils/Connection');

// Import required modules

// Create an Express application
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use the router for all API routes
app.use('/api', router);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
const port = 3000;
app.listen(port, async () => {
    await connectRedis();
    console.log(`Server is running on port ${port}`);
});