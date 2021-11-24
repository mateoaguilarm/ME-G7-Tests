// expressJS Base Server

// MODULES
    // Once express is installed, first step is to require the dependencie.
    // And declare as an app, then the port.

const express = require('express');
const app = express();
const port = 3000;

// MIDDLEWARES
    // Second step is to configure the middleware

app.use(express.json()); // This middleware allows the .json files on server.
app.use(express.urlencoded({ extended: true })); // Allows the format application/x-www-form-urlencoded (docs, media, etc)

// ENDPOINTS
    // This 3rd step sets the routes (there are different types of endpoints)

app.get('/', (req, res) => {
    res.send('Hello World!');
})

// LISTENER
    // Its listening to future requests
app.listen(port, (req, res) => {console.log(`example listening on http://localhost:${port}`);})