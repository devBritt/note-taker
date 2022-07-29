// dependencies
const express = require('express');


// variables
const PORT = process.env.port || 3001;

// initialize server
const app = express();




// server listener
app.listen(PORT, () => {
    console.log(`Express server now listening on port ${PORT} 🚀`);
});
