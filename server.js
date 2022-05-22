//REQUIRE
const express = require("express");
const fs = require("fs");
const path = require('path');

const PORT = process.env.PORT || 3001;

//EXPRESS
const app = express();

//REQUIRE ROUTES
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//DATA SET UP
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//LISTENER
app.listen(PORT, function() {
    console.log(`API server now on port ${PORT}!`);
}); 