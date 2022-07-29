// dependencies
const router = require('express').Router();

const notes = require('../../db/db.json');

// add route to send notes list
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});



module.exports = router;
