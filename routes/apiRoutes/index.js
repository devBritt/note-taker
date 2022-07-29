// dependencies
const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');

router
    .route('/notes')
    .get((req, res) => {
        let results = notes;
        // send list of notes
        res.json(results);
    })
    .post((req, res) => {
        let notesList = notes;

        // validate req.body
        if (req.body.title && req.body.text) {
            // set unique id
            req.body.id = uuidv4();
            // create new note
            const note = createNewNote(req.body, notesList);
            // send new note
            res.json(note);
        } else {
            res.status(400).send("The note couldn't be created. It looks like there's missing input...")
        };
    });

router
    .route('/notes/:id')
    .delete((req, res) => {
        let notesList = notes;
        
        deleteNote(req.params.id, notesList);
        res.end();
    });

module.exports = router;
