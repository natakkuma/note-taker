//REQUIRE
const fs = require('fs');
const path = require('path');

//CREATE NEW NOTE
const createNewNote = (note, notes) => {
    //ADD NEW NOTE
    notes.push(note);

    //WRITE NOTES to db.json
    fs.writeFileSync(
        path.join(__dirname, '/db/db.json'),
        JSON.stringify(notes, null, 2)
    );

    return note;
};

//FIND NOTE BY ID
const findById = (id, notes) => {
    const result = notes.filter(note => note.id === id)[0];
    return result;
};

//DELETE NOTE
const deleteNote = (note, notes) => {
    //DELETE NOTE
    const index = notes.indexOf(note);
    notes.splice(index, 1);

    //UPDATE to db.json
    fs.writeFileSync(
        path.join(__dirname, '/db/db.json'),
        JSON.stringify(notes, null, 2)
    );
};

//EXPORT
module.exports = { createNewNote, findById, deleteNote };