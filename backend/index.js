const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

require('dotenv/config');

// Create an API URL
const api = process.env.API_URL;

//Tester API
app.get(`${api}/products`, (req, res) => {
    console.log('GET request received at /api/products');
    const product = {
        id: 1,
        name: "Follicle Sprout",
        image: 'follicle sprout image url',
    };
    res.send(product);
});

app.post(`${api}/products`, (req, res) => {
    console.log('POST request received at /api/products');
    console.log('Request body:', req.body);
    const product = {
        id: 1,
        name: "Follicle Sprout",
        image: 'follicle sprout image url',
    };
    res.send(product);
});


// Middleware
// 1. Serve static files from the dist directory
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// 2. Body-parser
app.use(express.json());

// 3. Morgan - Logs requests
app.use(morgan('tiny'));

// Test
app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next();
});


// Catch-all route to serve index.html for SPA routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});


//database connection - connecting to mangodb
mongoose.connect(process.env.CONNECTION_STRING, {
    dbName: "follicle_sprout-database"
})
.then(() => {
    console.log('Database connection is ready...')
})
.catch((err) => {
    console.log('no connection established')
}) 

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    
    console.log(`Server is running on http://localhost:${PORT}`);
});
