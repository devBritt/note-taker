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

function deleteNote(id, notesArr) {
    const delNote = notesArr.splice(notesArr.findIndex(item => item.id === id), 1)[0];

    // update db.json to remove new note
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArr }, null, 2)
    );

    return delNote;
};

module.exports = {
    createNewNote,
    deleteNote
};
