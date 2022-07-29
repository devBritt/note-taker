// dependencies
const fs = require('fs');
const path = require('path');

// functions
function createNewNote(note, notesArr) {
    notesArr.push(note);

    // update db.json to include new note
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArr}, null, 2)
    );

    return note;
};

module.exports = {
    createNewNote,
};
