// dependencies
const router = require('express').Router();

const notes = require('../../db/db.json');

// add route to send notes list
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    let notesList = notes;
    console.log(notesList);
})

module.exports = router;
