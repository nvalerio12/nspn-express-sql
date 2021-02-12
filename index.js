// 1 - environment
require('dotenv').config();

// 2 - imports
const express = require('express');
const axios = require('axios');
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const controllers = require('./controllers');


// 3 - App set up
const app = express();
app.set('view engine', 'ejs');


// 4 - App Middleware (app.use)
app.use(ejsLayouts);
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// 5 - Routes (controllers)

// home route
app.get('/', (req, res) => {
    res.send('Welcome Packer Nation!'); 
});

// error route

// Listen on a PORT
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});