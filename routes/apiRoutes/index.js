// dependencies
const router = require('express').Router();
const { createNewNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');

// add route to send notes list
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    let notesList = notes;

    // validate req.body
    if (req.body.title && req.body.text) {
        // set unique id
        req.body.id = uuidv4();
        // create new note
        const note = createNewNote(req.body, notesList);
        res.json(note);
    } else {
        res.status(400).send("The note couldn't be created. It looks like there's missing input...")
    };
});

module.exports = router;
