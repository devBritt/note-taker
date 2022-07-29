// dependencies
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// variables
const PORT = process.env.PORT || 3001;

// initialize server
const app = express();

// make public files readily available
app.use(express.static('public'));

// parse incoming JSON data
app.use(express.json());

// include all routes
// app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// server listener
app.listen(PORT, () => {
    console.log(`Express server now listening on port ${PORT} 🚀`);
});
